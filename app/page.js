import Header from "@components/Header";
import About from "@components/About";
import BlogCard from "@components/ui/BlogCard";
import styles from "@styles/Home.module.css";
import Reveal from "@components/motion/Reveal";
import { Stagger, StaggerItem } from "@components/motion/Stagger";
import MagneticButton from "@components/motion/MagneticButton";
import LineDraw from "@components/motion/LineDraw";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export const metadata = createMetadata({
	title: siteConfig.title,
	description: siteConfig.tagline,
	path: "/",
});

async function getLatestBlogs() {
	return client.fetch(latestPostsQuery);
}

export default async function Home() {
	const latestBlogs = await getLatestBlogs();

	return (
		<>
			<Header />
			<About />
			<section className={styles.latestArticlesSection}>
				<div className={styles.articlesDivider}>
					<LineDraw />
				</div>
				<Reveal>
					<h2 className={styles.sectionTitle}>
						<span className={styles.sectionTitleGhost} aria-hidden="true">
							Writing
						</span>
						Latest Articles
					</h2>
				</Reveal>
				<Stagger className={styles.articlesGrid}>
					{latestBlogs.map((blog) => (
						<StaggerItem key={blog._id}>
							<BlogCard blog={blog} />
						</StaggerItem>
					))}
				</Stagger>
				<Reveal delay={0.2}>
					<MagneticButton href="/blog" className={styles.viewAllButton}>
						View All Articles
						<span className={styles.viewAllArrow} aria-hidden="true">
							&rarr;
						</span>
					</MagneticButton>
				</Reveal>
			</section>
		</>
	);
}
