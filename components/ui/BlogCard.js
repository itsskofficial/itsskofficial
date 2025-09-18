import styles from "@styles/Blog.module.css";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const BlogCard = ({ blog }) => {
	const blogImage = blog.mainImage
		? urlFor(blog.mainImage).width(400).height(225).url()
		: "/assets/images/blog/placeholder.jpg";

	const publishedDate = new Date(blog.publishedAt).toLocaleDateString(
		"en-US",
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		}
	);

	return (
		<Link href={`/blog/${blog.slug}`} className={styles.card}>
			<div className={styles.cardImageContainer}>
				<img
					src={blogImage}
					alt={blog.title}
					className={styles.cardImage}
				/>
			</div>
			<div className={styles.cardContent}>
				<span className={styles.cardCategory}>
					{blog.categories?.[0] || "General"}
				</span>
				<h3 className={styles.cardTitle}>{blog.title}</h3>
				<p className={styles.cardSummary}>{blog.summary}</p>
				<div className={styles.cardFooter}>
					<span>{publishedDate}</span>
					<span>Read More &rarr;</span>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
