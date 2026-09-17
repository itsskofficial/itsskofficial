"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "@styles/Article.module.css";
import { categoryHref } from "@lib/categories";

export default function ArticleHeader({ title, categories }) {
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

	return (
		<div ref={ref} className={styles.header}>
			<motion.h1
				className={styles.title}
				style={shouldReduceMotion ? {} : { y, opacity }}
			>
				{title}
			</motion.h1>
			{categories?.length > 0 && (
				<p className={styles.meta}>
					{categories.map((category, index) => (
						<span key={category}>
							{index > 0 && (
								<span className={styles.categorySeparator} aria-hidden="true">
									·
								</span>
							)}
							<Link href={categoryHref(category)} className={styles.category}>
								{category}
							</Link>
						</span>
					))}
				</p>
			)}
		</div>
	);
}
