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
import JsonLd from "@/components/JsonLd";
import { createMetadata, absoluteUrl } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site";

export async function generateStaticParams() {
	const slugs = await client.fetch(postSlugsQuery);
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const blog = await client.fetch(postBySlugQuery, { slug: params.slug });
	if (!blog) {
		return {};
	}

	const imageUrl = blog.mainImage
		? urlFor(blog.mainImage).width(1200).height(630).fit("crop").url()
		: undefined;

	return createMetadata({
		title: blog.title,
		description: blog.summary,
		path: `/blog/${params.slug}`,
		image: imageUrl,
		type: "article",
		publishedTime: blog.publishedAt,
		modifiedTime: blog._updatedAt,
		authors: [blog.authorName || siteConfig.author],
		tags: blog.categories,
	});
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

	const articleJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.summary,
		image: [blogImage],
		datePublished: blog.publishedAt,
		dateModified: blog._updatedAt || blog.publishedAt,
		author: {
			"@type": "Person",
			name: blog.authorName || siteConfig.author,
			url: getSiteUrl(),
		},
		publisher: {
			"@type": "Person",
			name: siteConfig.author,
			url: getSiteUrl(),
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": absoluteUrl(`/blog/${slug}`),
		},
		articleSection: blog.categories?.[0],
		keywords: blog.categories?.join(", "),
	};

	return (
		<>
			<JsonLd data={articleJsonLd} />
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
