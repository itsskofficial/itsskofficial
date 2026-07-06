import { createClient } from "@sanity/client";
import ConfigStore from "configstore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomBytes } from "crypto";
import { CONSCIOUSNESS_SERIES, linkifySeriesReferences } from "./lib/consciousness-series.js";
import {
	stripEmDashes,
	normalizeFootnoteSyntax,
	markdownToPortableText,
	extractTitle,
	extractSummary,
	slugify,
} from "./lib/markdown-to-portable-text.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const articlesDir = path.join(root, "articles");

const config = new ConfigStore("sanity", {}, { globalConfigPath: true });
const token = config.get("authToken");
if (!token) {
	throw new Error("No Sanity auth token found. Run `npx sanity login` first.");
}

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jojc7zvp",
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: "2024-07-18",
	token,
	useCdn: false,
});

const key = () => randomBytes(4).toString("hex");

function preprocessArticleFile(article) {
	const filePath = path.join(articlesDir, article.file);
	let content = fs.readFileSync(filePath, "utf8");
	content = stripEmDashes(content);
	content = normalizeFootnoteSyntax(content);
	content = linkifySeriesReferences(content, article.num);
	fs.writeFileSync(filePath, content, "utf8");
	return content;
}

async function uploadImageFromUrl(url, filename) {
	const res = await fetch(url);
	if (!res.ok) {
		const fallback = `https://picsum.photos/seed/${filename.replace(/\.[^.]+$/, "")}/1400/800`;
		const fallbackRes = await fetch(fallback);
		if (!fallbackRes.ok) {
			throw new Error(`Failed to fetch ${url}: ${res.status}`);
		}
		const buffer = Buffer.from(await fallbackRes.arrayBuffer());
		return client.assets.upload("image", buffer, { filename });
	}
	const buffer = Buffer.from(await res.arrayBuffer());
	return client.assets.upload("image", buffer, { filename });
}

async function ensureAuthor() {
	const existing = await client.fetch(
		`*[_type == "author" && slug.current == "sarthak-karandikar"][0]._id`
	);
	if (existing) return existing;
	throw new Error("Author not found. Run tech seed script first.");
}

async function ensureCategory() {
	const existing = await client.fetch(
		`*[_type == "category" && slug.current == "philosophy"][0]._id`
	);
	if (existing) return existing;

	const doc = await client.create({
		_type: "category",
		title: "Philosophy",
		slug: { _type: "slug", current: "philosophy" },
		description:
			"Essays on consciousness, mind, and the questions underneath both.",
	});
	return doc._id;
}

async function seedArticle(article, authorId, categoryId) {
	const cleaned = preprocessArticleFile(article);
	const title = extractTitle(cleaned);
	const slug = slugify(title);
	const body = markdownToPortableText(cleaned);
	const summary = extractSummary(body);

	const existing = await client.fetch(
		`*[_type == "post" && slug.current == $slug][0]._id`,
		{ slug }
	);

	console.log(`Uploading image for: ${title}`);
	const asset = await uploadImageFromUrl(article.imageUrl, `${slug}.jpg`);

	const doc = {
		_type: "post",
		title,
		slug: { _type: "slug", current: slug },
		summary,
		author: { _type: "reference", _ref: authorId },
		categories: [{ _type: "reference", _ref: categoryId, _key: key() }],
		publishedAt: article.publishedAt,
		mainImage: {
			_type: "image",
			asset: { _type: "reference", _ref: asset._id },
			alt: article.imageAlt,
		},
		body,
	};

	if (existing) {
		await client.patch(existing).set(doc).commit();
		console.log(`Updated: ${title}`);
		return existing;
	}

	const created = await client.create(doc);
	console.log(`Created: ${title}`);
	return created._id;
}

async function main() {
	console.log("Preprocessing and seeding consciousness articles...\n");

	const authorId = await ensureAuthor();
	const categoryId = await ensureCategory();

	for (const article of CONSCIOUSNESS_SERIES) {
		await seedArticle(article, authorId, categoryId);
	}

	console.log("\nDone. 10 consciousness articles seeded.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
