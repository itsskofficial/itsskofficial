// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import styles from "@styles/Article.module.css";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PostBody from "@/components/PostBody"; // Import the new component

// Generate static pages for each blog post
export async function generateStaticParams() {
	const slugs = await client.fetch(postSlugsQuery);
	return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
	const blog = await client.fetch(postBySlugQuery, { slug: params.slug });
	if (!blog) {
		return {};
	}
	return {
		title: `${blog.title} | Sarthak Karandikar`,
		description: blog.summary,
	};
}

const ArticlePage = async ({ params }) => {
	const { slug } = params;
	const blog = await client.fetch(postBySlugQuery, { slug });

	if (!blog) {
		notFound();
	}

	const blogImage = urlFor(blog.mainImage).width(1100).height(550).url();
	const publishedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<article className={styles.articleContainer}>
			<div className={styles.header}>
				<h1 className={styles.title}>{blog.title}</h1>
				<p className={styles.meta}>
					Published on {publishedDate} in{" "}
					<span className={styles.category}>{blog.categories?.[0]}</span>
				</p>
			</div>
			<img src={blogImage} alt={blog.title} className={styles.mainImage} />
			<div className={styles.content}>
				{/* Use the new PostBody component here */}
				<PostBody body={blog.body} />
			</div>
			<div className={styles.backLinkContainer}>
				<Link href="/blog" className={styles.backLink}>
					&larr; Back to all articles
				</Link>
			</div>
		</article>
	);
};

export default ArticlePage;