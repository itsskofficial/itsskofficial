"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "@styles/Article.module.css";

export default function ArticleHeader({ title, category, date }) {
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
			<p className={styles.meta}>
				<span className={styles.category}>{category}</span>
				{" · "}
				{date}
			</p>
		</div>
	);
}
