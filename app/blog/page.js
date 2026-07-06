import Articles from "@components/Articles";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

async function getBlogs() {
	const blogs = await client.fetch(postsQuery);
	return blogs;
}

export default async function BlogPage() {
	const blogs = await getBlogs();

	return <Articles blogs={blogs} />;
}
