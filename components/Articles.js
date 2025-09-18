"use client";

import { useState, useMemo } from "react";
import BlogCard from "@components/ui/BlogCard";
import styles from "@styles/Blog.module.css";
import { blogs } from "@constants/blogs";

const Articles = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");

	const categories = useMemo(() => {
		const uniqueCategories = [
			"All",
			...new Set(blogs.map((blog) => blog.category)),
		];
		return uniqueCategories;
	}, []);

	const filteredBlogs = useMemo(() => {
		let blogsToFilter = blogs;

		// 1. Filter by the active category
		if (activeCategory !== "All") {
			blogsToFilter = blogsToFilter.filter(
				(blog) => blog.category === activeCategory
			);
		}

		// 2. Filter by the search query on the result of the category filter
		if (searchQuery.trim() !== "") {
			const lowercasedQuery = searchQuery.toLowerCase();
			blogsToFilter = blogsToFilter.filter(
				(blog) =>
					blog.title.toLowerCase().includes(lowercasedQuery) ||
					blog.summary.toLowerCase().includes(lowercasedQuery)
			);
		}

		return blogsToFilter;
	}, [activeCategory, searchQuery]);

	return (
		<section className={styles.container} data-aos="fade-in">
			<h1 className={styles.title}>My Articles</h1>
			<p className={styles.subtitle}>
				A collection of my thoughts and explorations.
			</p>

			<div className={styles.searchContainer}>
				<i className={`fa-solid fa-search ${styles.searchIcon}`} />
				<input
					type="text"
					placeholder="Search articles by title or topic..."
					className={styles.searchInput}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			<div className={styles.categories}>
				{categories.map((category) => (
					<button
						key={category}
						className={`${styles.categoryButton} ${
							activeCategory === category
								? styles.activeCategory
								: ""
						}`}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</button>
				))}
			</div>

			{filteredBlogs.length > 0 ? (
				<div className={styles.cardsGrid}>
					{filteredBlogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			) : (
				<p className={styles.noResults}>
					No articles found. Try a different search or category.
				</p>
			)}
		</section>
	);
};

export default Articles;
