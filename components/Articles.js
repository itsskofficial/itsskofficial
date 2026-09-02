"use client";

import { useState, useMemo, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import BlogCard from "@components/ui/BlogCard";
import TextReveal from "@components/motion/TextReveal";
import Reveal from "@components/motion/Reveal";
import { Stagger, StaggerItem } from "@components/motion/Stagger";
import styles from "@styles/Blog.module.css";

// Categories live in the URL as ?category=technology so a filtered view can be
// shared. The slug is matched back to the category title case insensitively,
// and anything unrecognised falls back to showing everything.
const categorySlug = (category) =>
	category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const matchCategory = (param, availableCategories) => {
	if (!param) return "All";
	const match = availableCategories.find(
		(category) => categorySlug(category) === param.toLowerCase()
	);
	return match || "All";
};

const Articles = ({ blogs }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const shouldReduceMotion = useReducedMotion();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const categories = useMemo(() => {
		const allCategories = blogs.flatMap((blog) => blog.categories || []);
		return ["All", ...new Set(allCategories)];
	}, [blogs]);

	// The filter is entirely client side, so the URL only mirrors local state.
	// Routing through the app router instead would refetch this server rendered
	// route on every click and blank the list while the payload is in flight.
	const [activeCategory, setActiveCategory] = useState(() =>
		matchCategory(
			searchParams.get("category"),
			blogs.flatMap((blog) => blog.categories || [])
		)
	);

	const selectCategory = useCallback(
		(category) => {
			setActiveCategory(category);

			const params = new URLSearchParams(window.location.search);

			if (category === "All") {
				params.delete("category");
			} else {
				params.set("category", categorySlug(category));
			}

			const query = params.toString();
			window.history.replaceState(
				null,
				"",
				query ? `${pathname}?${query}` : pathname
			);
		},
		[pathname]
	);

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
				<h1 className={styles.title}>
					<TextReveal text="My Articles" as="span" />
				</h1>
				<p className={styles.subtitle}>
					Writing at the intersection of technology, science, and
					philosophy.
				</p>
			</Reveal>

			<Reveal delay={0.1}>
				<div className={styles.filtersSticky}>
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
								onClick={() => selectCategory(category)}
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
				</div>
			</Reveal>

			{filteredBlogs.length > 0 ? (
				<Stagger className={styles.cardsGrid} animateOnMount>
					{filteredBlogs.map((blog) => (
						<StaggerItem key={blog._id}>
							<BlogCard blog={blog} />
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
