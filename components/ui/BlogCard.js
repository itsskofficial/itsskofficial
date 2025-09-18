import styles from "@styles/Blog.module.css";
import Link from "next/link";

const BlogCard = ({ blog }) => {
	return (
		<Link href={`/blog/${blog.slug}`} className={styles.card}>
			<div className={styles.cardImageContainer}>
				<img
					src={blog.image}
					alt={blog.title}
					className={styles.cardImage}
				/>
			</div>
			<div className={styles.cardContent}>
				<span className={styles.cardCategory}>{blog.category}</span>
				<h3 className={styles.cardTitle}>{blog.title}</h3>
				<p className={styles.cardSummary}>{blog.summary}</p>
				<div className={styles.cardFooter}>
					<span>{blog.date}</span>
					<span>Read More &rarr;</span>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
