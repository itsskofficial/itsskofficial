"use client";

import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@context/ThemeProvider";

const Header = () => {
	const { mode } = useTheme();

	return (
		<section id="home" className={styles.parent} data-aos="fade-in">
			<div className={styles.headText}>
				<h1 className={styles.headTitle}>Hey, I'm Sarthak</h1>
				<h2 className={styles.headSubtitle}>
					I write about technology, science, and the ideas that shape
					our world.
				</h2>
				<Link href="/blog" className={styles.ctaButton}>
					Read my articles
				</Link>
			</div>
			<div className={styles.headImage}>
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
			</div>
		</section>
	);
};

export default Header;
