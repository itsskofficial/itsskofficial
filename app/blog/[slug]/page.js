// app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import styles from "@styles/Article.module.css";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PostBody from "@/components/PostBody";
import ReadingProgressBar from "@/components/ArticleClient";
import ArticleHeader from "@/components/ArticleHeader";
import Reveal from "@/components/motion/Reveal";

export async function generateStaticParams() {
	const slugs = await client.fetch(postSlugsQuery);
	return slugs.map((slug) => ({ slug }));
}

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
		<>
			<ReadingProgressBar />
			<article className={styles.articleContainer}>
				<Reveal>
					<ArticleHeader
						title={blog.title}
						category={blog.categories?.[0]}
						date={publishedDate}
					/>
				</Reveal>
				<Reveal delay={0.1}>
					<img
						src={blogImage}
						alt={blog.title}
						className={styles.mainImage}
					/>
				</Reveal>
				<div className={styles.content}>
					<PostBody body={blog.body} />
				</div>
				<div className={styles.backLinkContainer}>
					<Link href="/blog" className={styles.backLink}>
						<span className={styles.backArrow} aria-hidden="true">
							&larr;
						</span>
						Back to all articles
					</Link>
				</div>
			</article>
		</>
	);
};

export default ArticlePage;
