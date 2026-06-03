"use client";

import Image from "next/image";
import styles from "@styles/AboutPage.module.css";

export default function AboutClient() {
	return (
		<div className={styles.container} data-aos="fade-in">
			<section className={styles.aboutSection}>
				<div className={styles.aboutText}>
					<h1 className={styles.title}>About Me</h1>
					<p className={styles.bio}>
						I&apos;m a builder at heart. I like turning ideas into
						working systems (software, tools, experiments) and
						learning by making.
					</p>
					<p className={styles.bio}>
						I also do independent research: following questions,
						reading widely, and publishing when something holds up
						to scrutiny.
					</p>
					<p className={styles.bio}>
						I&apos;m drawn to{" "}
						<strong>technology, science, and philosophy</strong>{" "}
						together. Technology is how I build; science is how I
						test what&apos;s true; philosophy is how I stay honest
						about what we don&apos;t yet understand.
					</p>
					<p className={styles.bio}>
						What I want that work to amount to, over the long run,
						is a real contribution to the mysteries of{" "}
						<strong>consciousness</strong>, not as a slogan but as
						a direction: using all three lenses to chip away at
						questions about mind, experience, and what it means to
						be aware.
					</p>
					<p className={styles.bio}>
						This site is where I write and think in public.
						It&apos;s not a résumé, and I&apos;m not pitching
						anyone.
					</p>
				</div>
				<div className={styles.aboutImage}>
					<Image
						src="/assets/images/about.jpg"
						width={350}
						height={350}
						alt="Sarthak Karandikar"
						className={styles.profilePic}
					/>
				</div>
			</section>

			<section className={styles.historySection} data-aos="fade-up">
				<h2 className={styles.sectionTitle}>Some of what I&apos;ve done</h2>
				<p className={styles.historyText}>
					Over the past few years I&apos;ve built and shipped AI
					products, including{" "}
					<a
						href="https://github.com/existence-master/sentient"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sentient
					</a>
					, an open-source proactive assistant, and co-founded{" "}
					<strong>Existence</strong>, which is now behind me.
					I&apos;ve published independent research on AI for education
					and knowledge mapping, including work in{" "}
					<a
						href="https://ieeexplore.ieee.org/document/11406499"
						target="_blank"
						rel="noopener noreferrer"
					>
						IEEE
					</a>{" "}
					and related venues, and I keep exploring how ideas from
					computer science, the sciences, and philosophy might
					eventually bear on consciousness. These days I&apos;m
					building at a startup while continuing to research and write
					on my own.
				</p>
			</section>
		</div>
	);
}
