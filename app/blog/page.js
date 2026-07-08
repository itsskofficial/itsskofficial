import Articles from "@components/Articles";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { createMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = createMetadata({
	title: "Blog",
	description:
		"Articles on technology, science, and philosophy by Sarthak Karandikar.",
	path: "/blog",
});

async function getBlogs() {
	const blogs = await client.fetch(postsQuery);
	return blogs;
}

export default async function BlogPage() {
	const blogs = await getBlogs();

	return <Articles blogs={blogs} />;
}
