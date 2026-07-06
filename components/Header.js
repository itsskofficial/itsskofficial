"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@context/ThemeProvider";
import TextReveal from "@components/motion/TextReveal";

const Header = () => {
	const { mode } = useTheme();
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

	return (
		<section id="home" className={styles.parent} ref={ref}>
			<div className={styles.headText}>
				<h1 className={styles.headTitle}>
					<TextReveal text="Hey, I'm Sarthak" as="span" />
				</h1>
				<motion.h2
					className={styles.headSubtitle}
					initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
					animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					I build things, do independent research, and write about
					technology, science, and philosophy.
				</motion.h2>
				<motion.div
					className={styles.ctaWrapper}
					initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
					animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					<Link href="/blog" className={styles.ctaButton}>
						Read my articles
						<span className={styles.ctaArrow} aria-hidden="true">
							&rarr;
						</span>
					</Link>
				</motion.div>
			</div>
			<div className={styles.headImage}>
				<motion.div
					className={styles.imageWrapper}
					style={shouldReduceMotion ? {} : { y: imageY }}
				>
					<Image
						src={
							mode === "dark"
								? "/assets/images/header.jpg"
								: "/assets/images/headerlight.jpg"
						}
						priority={true}
						width={400}
						height={400}
						alt="Hero Image"
						className={styles.image}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Header;
