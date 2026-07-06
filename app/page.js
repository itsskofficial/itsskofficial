import Header from "@components/Header";
import About from "@components/About";
import Link from "next/link";
import BlogCard from "@components/ui/BlogCard";
import styles from "@styles/Home.module.css";
import Reveal from "@components/motion/Reveal";
import { Stagger, StaggerItem } from "@components/motion/Stagger";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

async function getLatestBlogs() {
	const blogs = await client.fetch(latestPostsQuery);
	return blogs;
}

export default async function Home() {
	const latestBlogs = await getLatestBlogs();

	return (
		<>
			<Header />
			<About />
			<section className={styles.latestArticlesSection}>
				<Reveal>
					<p className="sectionLabel">// LATEST</p>
					<h2 className={styles.sectionTitle}>Latest Articles</h2>
				</Reveal>
				<Stagger className={styles.articlesGrid}>
					{latestBlogs.map((blog, index) => (
						<StaggerItem key={blog._id}>
							<BlogCard blog={blog} index={index} />
						</StaggerItem>
					))}
				</Stagger>
				<Reveal delay={0.2}>
					<Link href="/blog" className={styles.viewAllButton}>
						View All Articles
						<span className={styles.viewAllArrow} aria-hidden="true">
							&rarr;
						</span>
					</Link>
				</Reveal>
			</section>
		</>
	);
}
