"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "@styles/AboutPage.module.css";
import Reveal from "@components/motion/Reveal";
import LineDraw from "@components/motion/LineDraw";
import TextReveal from "@components/motion/TextReveal";

const lenses = [
	{
		num: "01",
		title: "Technology",
		text: "Because the only way to know if an idea works is to build it into something real.",
	},
	{
		num: "02",
		title: "Science",
		text: "Because the world does not care about elegant theories that fail under scrutiny.",
	},
	{
		num: "03",
		title: "Philosophy",
		text: "Because some questions, especially about mind and meaning, run deeper than any single experiment.",
	},
];

export default function AboutClient() {
	const heroRef = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const titleY = useTransform(scrollYProgress, [0, 1], [0, 40]);

	return (
		<div className={styles.page}>
			<section className={styles.hero} ref={heroRef}>
				<div className={styles.heroGrid}>
					<motion.div
						className={styles.heroText}
						style={shouldReduceMotion ? {} : { y: titleY }}
					>
						<Reveal>
							<h1 className={styles.heroTitle}>
								<TextReveal text="About Me" as="span" />
							</h1>
						</Reveal>
					</motion.div>
					<motion.div
						className={styles.heroImageCol}
						style={shouldReduceMotion ? {} : { y: imageY }}
					>
						<Reveal delay={0.15}>
							<div className={styles.imageFrame}>
								<Image
									src="/assets/images/about.jpg"
									width={480}
									height={600}
									alt="Sarthak Karandikar"
									className={styles.heroImage}
									priority
								/>
							</div>
						</Reveal>
					</motion.div>
				</div>
			</section>

			<div className={styles.dividerWrap}>
				<LineDraw />
			</div>

			<section className={styles.lensesSection}>
				<Reveal>
					<h2 className={styles.sectionHeading}>
						Why technology, science, and philosophy
					</h2>
					<p className={styles.sectionIntro}>
						Three ways of asking the same kind of question: what is
						real, what can be built, and what still has no answer.
					</p>
				</Reveal>
				<div className={styles.lensGrid}>
					{lenses.map((lens, i) => (
						<Reveal key={lens.num} delay={i * 0.08}>
							<article className={styles.lensCard}>
								<span className={styles.lensNum}>{lens.num}</span>
								<h3 className={styles.lensTitle}>{lens.title}</h3>
								<p className={styles.lensText}>{lens.text}</p>
							</article>
						</Reveal>
					))}
				</div>
			</section>

			<section className={styles.doSection}>
				<div className={styles.doLayout}>
					<Reveal>
						<h2 className={styles.doHeading}>What I do</h2>
					</Reveal>
					<div className={styles.doColumns}>
						<Reveal delay={0.08}>
							<p className={styles.doPara}>
								I have founded and worked across multiple startups, shipped
								open source, and built AI products from scratch. I have
								published research in IEEE and WSEAS, presented at
								international conferences, and hold a granted Indian patent.
							</p>
						</Reveal>
						<Reveal delay={0.16}>
							<p className={styles.doPara}>
								I am a founding engineer at a startup now, building and
								shipping every day. I still research and write on my own,
								contribute to open source, and create content on the side.
								Most of what I have done is still what I do.
							</p>
						</Reveal>
					</div>
				</div>
			</section>

			<div className={styles.dividerWrap}>
				<LineDraw />
			</div>

			<section className={styles.consciousnessSection}>
				<div className={styles.consciousnessInner}>
					<Reveal>
						<blockquote className={styles.consciousnessQuote}>
							Over the long run, I want that work to amount to something
							real on the mysteries of{" "}
							<strong>consciousness</strong>, not as a slogan but as a
							direction. Using every lens I have to chip away at questions
							about mind, experience, and what it means to be aware.
						</blockquote>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
