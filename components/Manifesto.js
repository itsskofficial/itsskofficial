"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "@styles/Manifesto.module.css";

const words = ["Build.", "Research.", "Write."];

export default function Manifesto() {
	const containerRef = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const opacity0 = useTransform(scrollYProgress, [0, 0.15, 0.33], [1, 1, 0.1]);
	const opacity1 = useTransform(scrollYProgress, [0.2, 0.4, 0.55], [0.1, 1, 0.1]);
	const opacity2 = useTransform(scrollYProgress, [0.45, 0.65, 1], [0.1, 1, 1]);
	const opacities = [opacity0, opacity1, opacity2];

	if (shouldReduceMotion) {
		return (
			<section className={styles.fallback}>
				{words.map((word) => (
					<h2 key={word} className={styles.word}>
						{word}
					</h2>
				))}
			</section>
		);
	}

	return (
		<section ref={containerRef} className={styles.section}>
			<div className={styles.sticky}>
				<div className={styles.words}>
					{words.map((word, i) => (
						<motion.h2
							key={word}
							className={styles.word}
							style={{ opacity: opacities[i] }}
						>
							{word}
						</motion.h2>
					))}
				</div>
			</div>
		</section>
	);
}
