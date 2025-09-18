"use client";

import Image from "next/image";
import styles from "@styles/AboutPage.module.css";
import { useTheme } from "@context/ThemeProvider";

export default function AboutClient() {
	const { mode } = useTheme();

	return (
		<div className={styles.container} data-aos="fade-in">
			<section className={styles.aboutSection}>
				<div className={styles.aboutText}>
					<h1 className={styles.title}>About Me</h1>
					<p className={styles.bio}>
						I am a curious individual passionate about technology,
						science, and philosophy. From understanding the
						complexities of the universe to exploring human
						creativity, I thrive in the intersection of logical and
						artistic pursuits.
					</p>
					<p className={styles.bio}>
						This blog is my digital garden; a place where I share my
						thoughts, document my learnings, and explore the ideas
						that captivate me.
					</p>
					<a
						href="/assets/resources/purpose.pdf"
						download="SK's Purpose.pdf"
						className={styles.downloadButton}
					>
						<i
							className="fa-solid fa-file"
							style={{ marginRight: "10px" }}
						/>
						Download My Purpose
					</a>
				</div>
				<div className={styles.aboutImage}>
					<Image
						src={
							mode === "dark"
								? "/assets/images/about.jpg"
								: "/assets/images/aboutlight.jpg"
						}
						width={350}
						height={350}
						alt="Sarthak Karandikar"
						className={styles.profilePic}
					/>
				</div>
			</section>

			<section className={styles.workSection} data-aos="fade-up">
				<h2 className={styles.sectionTitle}>What I'm Building</h2>
				<p>
					My primary focus is my startup, <strong>Existence</strong>.
					We're dedicated to building radical, user-centric products
					using cutting-edge technology.
				</p>
				<p>
					Our flagship project is <strong>Sentient</strong>, a
					proactive AI companion designed to simplify your digital
					life.
				</p>
				<button
					className={styles.workButton}
					onClick={() => {
						window.open("https://existence.technology", "_blank");
					}}
				>
					Visit Existence Website
				</button>
			</section>
		</div>
	);
}