import { blogs } from "@constants/blogs";
import { notFound } from "next/navigation";
import styles from "@styles/Article.module.css";
import Link from "next/link";

// Generate static pages for each blog post
export async function generateStaticParams() {
	return blogs.map((blog) => ({
		slug: blog.slug,
	}));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
	const blog = blogs.find((p) => p.slug === params.slug);
	if (!blog) {
		return {};
	}
	return {
		title: `${blog.title} | Sarthak Karandikar`,
		description: blog.summary,
	};
}

const ArticlePage = ({ params }) => {
	const { slug } = params;
	const blog = blogs.find((p) => p.slug === slug);

	if (!blog) {
		notFound();
	}

	return (
		<article className={styles.articleContainer}>
			<div className={styles.header}>
				<h1 className={styles.title}>{blog.title}</h1>
				<p className={styles.meta}>
					Published on {blog.date} in{" "}
					<span className={styles.category}>{blog.category}</span>
				</p>
			</div>
			<img src={blog.image} alt={blog.title} className={styles.mainImage} />
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: blog.content }}
			/>
			<div className={styles.backLinkContainer}>
				<Link href="/blog" className={styles.backLink}>
					&larr; Back to all articles
				</Link>
			</div>
		</article>
	);
};

export default ArticlePage;