"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import styles from "@styles/Article.module.css";

export default function ReadingProgressBar() {
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	if (shouldReduceMotion) return null;

	return (
		<motion.div
			className={styles.progressBar}
			style={{ scaleX }}
		/>
	);
}
