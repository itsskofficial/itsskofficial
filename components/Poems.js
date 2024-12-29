"use client";

import { useEffect, useState } from "react";
import PoetryCard from "@components/ui/PoetryCard";
import PoetryModal from "@components/ui/PoetryModal";
import styles from "@styles/Poetry.module.css";
import { poetries } from "@constants/poetry";

const Poems = (props) => {
	const [filteredPoetries, setFilteredPoetries] = useState(poetries);
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedPoetry, setSelectedPoetry] = useState(null);

	useEffect(() => {
		const uniqueCategories = [
			"All",
			...new Set(poetries.map((poetry) => poetry.category)),
		];
		setCategories(uniqueCategories);
	}, []);

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
		if (category === "All") {
			setFilteredPoetries(poetries);
		} else {
			setFilteredPoetries(
				poetries.filter((poetry) => poetry.category === category)
			);
		}
	};

	return (
		<section
			className={`${styles.container} ${
				props.mode === "dark" ? null : styles.light
			}`}
		>
			<h1 className={styles.title}>Poetry</h1>
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
					{filteredPoetries.map((poetry) => (
						<PoetryCard
							key={poetry.id}
							poetry={poetry}
							onClick={setSelectedPoetry}
						/>
					))}
				</div>
			</div>
			{selectedPoetry && (
				<PoetryModal
					poetry={selectedPoetry}
					onClose={() => setSelectedPoetry(null)}
				/>
			)}
		</section>
	);
};

export default Poems;
