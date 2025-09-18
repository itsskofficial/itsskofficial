import Articles from "@components/Articles";
import AosWrapper from "@components/AosWrapper";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate this page every 60 seconds

async function getBlogs() {
	const blogs = await client.fetch(postsQuery);
	return blogs;
}

export default async function BlogPage() {
	const blogs = await getBlogs();

	return (
		<AosWrapper>
			<Articles blogs={blogs} />
		</AosWrapper>
	);
}
