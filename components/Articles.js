"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import BlogCard from "@components/ui/BlogCard";
import TextReveal from "@components/motion/TextReveal";
import Reveal from "@components/motion/Reveal";
import { Stagger, StaggerItem } from "@components/motion/Stagger";
import styles from "@styles/Blog.module.css";

const Articles = ({ blogs }) => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const shouldReduceMotion = useReducedMotion();

	const categories = useMemo(() => {
		const allCategories = blogs.flatMap((blog) => blog.categories || []);
		return ["All", ...new Set(allCategories)];
	}, [blogs]);

	const filteredBlogs = useMemo(() => {
		let blogsToFilter = blogs;

		if (activeCategory !== "All") {
			blogsToFilter = blogsToFilter.filter((blog) =>
				blog.categories?.includes(activeCategory)
			);
		}

		if (searchQuery.trim() !== "") {
			const lowercasedQuery = searchQuery.toLowerCase();
			blogsToFilter = blogsToFilter.filter(
				(blog) =>
					blog.title.toLowerCase().includes(lowercasedQuery) ||
					blog.summary.toLowerCase().includes(lowercasedQuery)
			);
		}

		return blogsToFilter;
	}, [blogs, activeCategory, searchQuery]);

	return (
		<section className={styles.container}>
			<Reveal>
				<p className="sectionLabel">// WRITING</p>
				<h1 className={styles.title}>
					<TextReveal text="My Articles" as="span" />
				</h1>
				<p className={styles.subtitle}>
					Writing at the intersection of technology, science, and
					philosophy.
				</p>
			</Reveal>

			<Reveal delay={0.1}>
				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Search articles..."
						className={styles.searchInput}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<svg
						className={styles.searchIcon}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
			</Reveal>

			<Reveal delay={0.15}>
				<div className={styles.categories}>
					{categories.map((category) => (
						<button
							key={category}
							className={`${styles.categoryButton} ${
								activeCategory === category
									? shouldReduceMotion
										? styles.activeCategoryStatic
										: styles.activeCategory
									: ""
							}`}
							onClick={() => setActiveCategory(category)}
						>
							{activeCategory === category &&
								!shouldReduceMotion && (
									<motion.span
										className={styles.categoryHighlight}
										layoutId="categoryHighlight"
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 30,
										}}
									/>
								)}
							{category}
						</button>
					))}
				</div>
			</Reveal>

			{filteredBlogs.length > 0 ? (
				<Stagger className={styles.cardsGrid}>
					{filteredBlogs.map((blog, index) => (
						<StaggerItem key={blog._id}>
							<BlogCard blog={blog} index={index} />
						</StaggerItem>
					))}
				</Stagger>
			) : (
				<Reveal>
					<p className={styles.noResults}>
						No articles found. Try a different search or category.
					</p>
				</Reveal>
			)}
		</section>
	);
};

export default Articles;
