"use client";

import Header from "@components/Header";
import About from "@components/About";
import Link from "next/link";
import { blogs } from "@constants/blogs";
import BlogCard from "@components/ui/BlogCard";
import styles from "@styles/Home.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
		Aos.refresh();
	}, []);

	// Get the 3 most recent blogs
	const latestBlogs = blogs.slice(0, 3);

	return (
		<>
			<Header />
			<About />
			<section
				className={styles.latestArticlesSection}
				data-aos="fade-up"
			>
				<h2 className={styles.sectionTitle}>Latest Articles</h2>
				<div className={styles.articlesGrid}>
					{latestBlogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
				<Link href="/blog" className={styles.viewAllButton}>
					View All Articles
				</Link>
			</section>
		</>
	);
}
