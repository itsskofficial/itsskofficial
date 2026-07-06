"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import { useTheme } from "@context/ThemeProvider";
import MagneticButton from "@components/motion/MagneticButton";

const Header = () => {
	const { mode } = useTheme();
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
	const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
	const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
	const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
	const subtitleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

	return (
		<section id="home" className={styles.hero} ref={ref}>
			<div className={styles.regLine} aria-hidden="true" />
			<div className={styles.grid} aria-hidden="true" />

			<div className={styles.content}>
				<motion.div
					className={styles.titleBlock}
					style={
						shouldReduceMotion
							? {}
							: { scale: titleScale, y: titleY }
					}
				>
					<h1 className={styles.displayTitle}>
						<span className={styles.line}>Hey,</span>
						<span className={styles.line}>I&apos;m Sarthak</span>
					</h1>
				</motion.div>

				<motion.p
					className={styles.subtitle}
					style={shouldReduceMotion ? {} : { opacity: subtitleOpacity }}
				>
					I build systems, do independent research, and write where
					technology, science, and philosophy meet.
				</motion.p>

				<motion.div
					className={styles.ctaRow}
					initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
					animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					<MagneticButton href="/blog" className={styles.ctaButton}>
						Read my articles
						<span className={styles.ctaArrow} aria-hidden="true">
							&rarr;
						</span>
					</MagneticButton>
				</motion.div>
			</div>

			<motion.div
				className={styles.portraitWrap}
				style={
					shouldReduceMotion
						? {}
						: { opacity: imageOpacity, scale: imageScale }
				}
			>
				<div className={styles.imageFrame}>
					<Image
						src={
							mode === "dark"
								? "/assets/images/header.jpg"
								: "/assets/images/headerlight.jpg"
						}
						priority
						width={360}
						height={360}
						alt="Sarthak Karandikar"
						className={styles.portrait}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Header;
