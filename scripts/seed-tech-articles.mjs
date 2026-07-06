import { createClient } from "@sanity/client";
import ConfigStore from "configstore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomBytes } from "crypto";
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

async function uploadLocalImage(filePath, filename) {
	const buffer = fs.readFileSync(filePath);
	return client.assets.upload("image", buffer, { filename });
}

const articles = [
	{
		file: "tech_1.md",
		publishedAt: "2026-03-11T10:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Abstract visualization of artificial intelligence and code",
	},
	{
		file: "tech_2.md",
		publishedAt: "2026-04-05T14:30:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Team collaborating around a laptop in a startup office",
	},
	{
		file: "tech_3.md",
		publishedAt: "2026-04-28T09:15:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Planning documents and laptop on a desk",
	},
	{
		file: "tech_4.md",
		publishedAt: "2026-05-19T11:45:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "People working across disciplines in a bright workspace",
	},
	{
		file: "tech_5.md",
		publishedAt: "2026-06-08T16:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Attendees networking at a technology conference",
	},
	{
		file: "tech_6.md",
		publishedAt: "2026-07-02T08:30:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Lines of code on a developer monitor",
	},
];

async function ensureAuthor() {
	const existing = await client.fetch(
		`*[_type == "author" && slug.current == "sarthak-karandikar"][0]._id`
	);
	if (existing) return existing;

	const asset = await uploadLocalImage(
		path.join(root, "public/assets/images/about.jpg"),
		"sarthak-karandikar.jpg"
	);

	const doc = await client.create({
		_type: "author",
		name: "Sarthak Karandikar",
		slug: { _type: "slug", current: "sarthak-karandikar" },
		image: {
			_type: "image",
			asset: { _type: "reference", _ref: asset._id },
		},
	});
	return doc._id;
}

async function ensureCategory() {
	const existing = await client.fetch(
		`*[_type == "category" && slug.current == "technology"][0]._id`
	);
	if (existing) return existing;

	const doc = await client.create({
		_type: "category",
		title: "Technology",
		slug: { _type: "slug", current: "technology" },
		description:
			"Essays on software engineering, AI, and the craft of building technology.",
	});
	return doc._id;
}

function preprocessArticle(filePath) {
	let content = fs.readFileSync(filePath, "utf8");
	content = stripEmDashes(content);
	content = normalizeFootnoteSyntax(content);
	fs.writeFileSync(filePath, content, "utf8");
	return content;
}

async function seedArticle(article, authorId, categoryId) {
	const filePath = path.join(root, "articles", article.file);
	const cleaned = preprocessArticle(filePath);
	const title = extractTitle(cleaned);
	const slug = slugify(title);
	const body = markdownToPortableText(cleaned);
	const summary = extractSummary(body, "A perspective on technology and engineering.");

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
	console.log("Seeding tech articles to Sanity production...\n");

	const authorId = await ensureAuthor();
	const categoryId = await ensureCategory();

	for (const article of articles) {
		await seedArticle(article, authorId, categoryId);
	}

	console.log("\nDone. 6 tech articles seeded with footnote support.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
