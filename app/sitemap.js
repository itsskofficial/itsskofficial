import { getSiteUrl } from "@/lib/site";
import { client } from "@/sanity/lib/client";
import { postSitemapQuery } from "@/sanity/lib/queries";

export default async function sitemap() {
	const base = getSiteUrl();
	const posts = await client.fetch(postSitemapQuery);

	const staticRoutes = [
		{
			url: base,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
	];

	const postRoutes = posts.map((post) => ({
		url: `${base}/blog/${post.slug}`,
		lastModified: new Date(post._updatedAt || post.publishedAt),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...postRoutes];
}
