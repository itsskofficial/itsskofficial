"use client";

import { useEffect, useState } from "react";
import BlogCard from "@components/ui/BlogCard";
import BlogModal from "@components/ui/BlogModal";
import styles from "@styles/Blog.module.css";
import { blogs } from "@constants/blogs";

const Articles = (props) => {
	const [filteredBlogs, setFilteredBlogs] = useState(blogs);
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedBlog, setSelectedBlog] = useState(null);

	useEffect(() => {
		const uniqueCategories = [
			"All",
			...new Set(blogs.map((blog) => blog.category)),
		];
		setCategories(uniqueCategories);
	}, []);

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
		if (category === "All") {
			setFilteredBlogs(blogs);
		} else {
			setFilteredBlogs(
				blogs.filter((blog) => blog.category === category)
			);
		}
	};

	return (
		<section
			className={`${styles.container} ${
				props.mode === "dark" ? null : styles.light
			}`}
		>
			<h1 className={styles.title}>Blog</h1>

			<div className={styles.categories}>
				{categories.map((category) => (
					<button
						key={category}
						className={[
							styles.categoryButton,
							props.mode === "dark" ? null : styles.light,
							activeCategory === category
								? styles.activeCategory
								: "",
						].join(" ")}
						onClick={() => handleCategoryChange(category)}
					>
						{category}
					</button>
				))}
			</div>

			<div className={styles.cardsWrapper}>
				<div className={styles.cards}>
					{filteredBlogs.map((blog) => (
						<BlogCard
							key={blog.id}
							blog={blog}
							onClick={setSelectedBlog}
						/>
					))}
				</div>
			</div>

			{selectedBlog && (
				<BlogModal
					blog={selectedBlog}
					mode={props.mode}
					onClose={() => setSelectedBlog(null)}
				/>
			)}
		</section>
	);
};

export default Articles;