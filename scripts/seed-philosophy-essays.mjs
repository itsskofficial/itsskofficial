// Standalone philosophy essays, as opposed to the numbered consciousness
// series in seed-consciousness-articles.mjs. An essay here can sit in more
// than one category, since these tend to straddle philosophy and technology.
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

// The first category is the one a blog card shows as its label.
const CATEGORY_DEFINITIONS = {
	philosophy: {
		title: "Philosophy",
		description:
			"Essays on consciousness, mind, and the questions underneath both.",
	},
	technology: {
		title: "Technology",
		description:
			"Essays on software engineering, AI, and the craft of building technology.",
	},
};

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

const articles = [
	{
		file: "philosophy_standalone_1.md",
		publishedAt: "2026-09-05T09:00:00.000Z",
		categories: ["philosophy", "technology"],
		imageUrl:
			"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Mist over a highland valley at sunrise with an empty road",
	},
];

async function ensureAuthor() {
	const existing = await client.fetch(
		`*[_type == "author" && slug.current == "sarthak-karandikar"][0]._id`
	);
	if (existing) return existing;
	throw new Error("Author not found. Run the tech seed script first.");
}

async function ensureCategory(slug) {
	const definition = CATEGORY_DEFINITIONS[slug];
	if (!definition) throw new Error(`Unknown category: ${slug}`);

	const existing = await client.fetch(
		`*[_type == "category" && slug.current == $slug][0]._id`,
		{ slug }
	);
	if (existing) return existing;

	const doc = await client.create({
		_type: "category",
		title: definition.title,
		slug: { _type: "slug", current: slug },
		description: definition.description,
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

async function seedArticle(article, authorId) {
	const filePath = path.join(root, "articles", article.file);
	const cleaned = preprocessArticle(filePath);
	const title = extractTitle(cleaned);
	const slug = slugify(title);
	const body = markdownToPortableText(cleaned);
	const summary = extractSummary(body, "An essay on consciousness.");

	const categoryIds = [];
	for (const categorySlug of article.categories) {
		categoryIds.push(await ensureCategory(categorySlug));
	}

	const existing = await client.fetch(
		`*[_type == "post" && slug.current == $slug][0]{_id, "assetId": mainImage.asset._ref}`,
		{ slug }
	);

	// Re-uploading on every run leaves an orphaned asset behind each time a
	// post is edited, so an existing image is kept unless asked otherwise.
	const reupload = process.argv.includes("--reupload-image");
	let assetId = existing?.assetId;

	if (assetId && !reupload) {
		console.log(`Reusing existing image for: ${title}`);
	} else {
		console.log(`Uploading image for: ${title}`);
		const asset = await uploadImageFromUrl(article.imageUrl, `${slug}.jpg`);
		assetId = asset._id;
	}

	const doc = {
		_type: "post",
		title,
		slug: { _type: "slug", current: slug },
		summary,
		author: { _type: "reference", _ref: authorId },
		categories: categoryIds.map((id) => ({
			_type: "reference",
			_ref: id,
			_key: key(),
		})),
		publishedAt: article.publishedAt,
		mainImage: {
			_type: "image",
			asset: { _type: "reference", _ref: assetId },
			alt: article.imageAlt,
		},
		body,
	};

	if (existing) {
		await client.patch(existing._id).set(doc).commit();
		console.log(`Updated: ${title}`);
		return existing._id;
	}

	const created = await client.create(doc);
	console.log(`Created: ${title}`);
	return created._id;
}

// Pass --only=philosophy_standalone_1.md (repeatable, or comma separated) to
// seed a subset. Re-seeding an article re-uploads its main image, so scoping
// the run avoids orphaned image assets for posts that did not change.
function selectArticles() {
	const requested = process.argv
		.filter((arg) => arg.startsWith("--only="))
		.flatMap((arg) => arg.slice("--only=".length).split(","))
		.map((name) => name.trim())
		.filter(Boolean);

	if (requested.length === 0) return articles;

	const unknown = requested.filter(
		(name) => !articles.some((article) => article.file === name)
	);
	if (unknown.length > 0) {
		throw new Error(`Unknown article(s): ${unknown.join(", ")}`);
	}

	return articles.filter((article) => requested.includes(article.file));
}

async function main() {
	const selected = selectArticles();
	console.log(
		`Seeding ${selected.length} philosophy essay(s) to Sanity production...\n`
	);

	const authorId = await ensureAuthor();

	for (const article of selected) {
		await seedArticle(article, authorId);
	}

	console.log(`\nDone. ${selected.length} philosophy essay(s) seeded.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
