import Header from "@components/Header";
import About from "@components/About";
import Link from "next/link";
import BlogCard from "@components/ui/BlogCard";
import styles from "@styles/Home.module.css";
import AosWrapper from "@components/AosWrapper";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate this page every 60 seconds

async function getLatestBlogs() {
	const blogs = await client.fetch(latestPostsQuery);
	return blogs;
}

export default async function Home() {
	const latestBlogs = await getLatestBlogs();

	return (
		<AosWrapper>
			<Header />
			<About />
			<section
				className={styles.latestArticlesSection}
				data-aos="fade-up"
			>
				<h2 className={styles.sectionTitle}>Latest Articles</h2>
				<div className={styles.articlesGrid}>
					{latestBlogs.map((blog) => (
						<BlogCard key={blog._id} blog={blog} />
					))}
				</div>
				<Link href="/blog" className={styles.viewAllButton}>
					View All Articles
				</Link>
			</section>
		</AosWrapper>
	);
}
