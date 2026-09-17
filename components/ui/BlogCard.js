import styles from "@styles/Blog.module.css";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// The whole card is a link, so the tags are plain labels rather than links.
const CardCategories = ({ categories }) => (
	<div className={styles.cardCategories}>
		{(categories?.length ? categories : ["General"]).map((category) => (
			<span key={category} className={styles.cardCategory}>
				{category}
			</span>
		))}
	</div>
);

const BlogCard = ({ blog, index, editorial = false }) => {
	const blogImage = blog.mainImage
		? urlFor(blog.mainImage).width(400).height(225).url()
		: "/assets/images/blog/placeholder.jpg";

	const indexLabel =
		index !== undefined ? String(index + 1).padStart(2, "0") : null;

	if (editorial) {
		return (
			<Link
				href={`/blog/${blog.slug}`}
				className={`${styles.card} ${styles.cardEditorial}`}
			>
				{indexLabel && (
					<span className={styles.editorialIndex}>{indexLabel}</span>
				)}
				<div className={styles.editorialBody}>
					<CardCategories categories={blog.categories} />
					<h3 className={styles.editorialTitle}>{blog.title}</h3>
				</div>
				<div className={styles.editorialImageWrap}>
					<img
						src={blogImage}
						alt=""
						className={styles.editorialImage}
					/>
				</div>
				<span className={styles.editorialArrow} aria-hidden="true">
					&rarr;
				</span>
			</Link>
		);
	}

	return (
		<Link href={`/blog/${blog.slug}`} className={styles.card}>
			{indexLabel && (
				<span className={styles.cardIndex}>{indexLabel}</span>
			)}
			<div className={styles.cardImageContainer}>
				<img src={blogImage} alt={blog.title} className={styles.cardImage} />
			</div>
			<div className={styles.cardContent}>
				<CardCategories categories={blog.categories} />
				<h3 className={styles.cardTitle}>{blog.title}</h3>
				<p className={styles.cardSummary}>{blog.summary}</p>
				<div className={styles.cardFooter}>
					<span className={styles.cardArrow}>Read More &rarr;</span>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
