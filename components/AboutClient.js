"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "@styles/AboutPage.module.css";
import Reveal from "@components/motion/Reveal";
import LineDraw from "@components/motion/LineDraw";
import TextReveal from "@components/motion/TextReveal";

// Each entry is a paragraph. Strings render as plain text; arrays mix text
// with links.
const SENTIENT = "https://github.com/existence-master/sentient";
const X = "https://x.com/_itsskofficial_";
const LINKEDIN = "https://www.linkedin.com/in/sarthak-karandikar-0223b7228/";

const story = [
	[
		"I started coding at 8, topped everything in school, and had the whole path figured out. Then I watched the movie ",
		{ em: "Jobs" },
		", and one thought wouldn’t leave me: the people who built the world around us weren’t smarter than us. They just decided to build. So I did too.",
	],
	"At 15 I started a platform connecting NGOs with volunteers. It was incubated at Atal Innovation Mission, and an angel investor put in 5 lakh. Then came a vegan men’s grooming brand and a health-first cloud kitchen. I ran the sourcing, vendors, negotiation, branding and content myself, and learned how a business really works by getting a lot of it wrong.",
	"Then things fell apart for a while. I went through depression, missed JEE Advanced because of COVID, and wanted to drop out. It took me a year to see that dropping out would have been ego talking. I spent that time leading a team of 7 making content on mental health, and slowly found my way back.",
	"In college I studied AI engineering and started again. First came a Web3 social platform where every post was minted as an NFT, so creators owned what they made and could sell it directly. I loved the idea. It still died because we couldn’t scale it.",
	"Alongside college I did two AI internships, going deep into deep learning and computer vision.",
	[
		"Then came Existence. We were early to the personal AI assistant wave. We built ",
		{ href: SENTIENT, text: "Sentient" },
		", an open source personal AI assistant, before tools like OpenClaw existed. It reached 700+ GitHub stars, 400+ paying users around the world, and 14M+ organic views. Existence also put out several other products, three published papers, and a granted patent. Today it lives on as an open source community.",
	],
	"After that I joined one of Indonesia’s largest conglomerates and shipped three internal AI agent tools in two months. Today I’m the founding engineer at CapMatch, building the AI platform behind $291M in contracted commercial real estate loans.",
	"7 years. 5 companies. 2 internships. 2 jobs. A patent. 5 papers. A lot that didn’t work, but no regrets.",
	"My long-term goal is to build a non-profit institution where I can work with the smartest people on the biggest questions we have: the origin of life, free will, the nature of space and time, and why anything exists at all, starting with consciousness.",
	[
		"If you’re working on something hard, or just like thinking about this stuff, my DMs are open on ",
		{ href: X, text: "X" },
		" and ",
		{ href: LINKEDIN, text: "LinkedIn" },
		".",
	],
];

const renderPart = (part, i) => {
	if (typeof part === "string") return part;
	if (part.em) return <em key={i}>{part.em}</em>;
	return (
		<a
			key={i}
			href={part.href}
			target="_blank"
			rel="noreferrer noopener"
			className={styles.storyLink}
		>
			{part.text}
		</a>
	);
};

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

			<section className={styles.storySection}>
				<Reveal>
					<h2 className={styles.storyHeading}>
						I was supposed to end up at Google.
					</h2>
				</Reveal>
				<div className={styles.storyBody}>
					{story.map((paragraph, i) => (
						<Reveal key={i}>
							<p className={styles.storyPara}>
								{typeof paragraph === "string"
									? paragraph
									: paragraph.map(renderPart)}
							</p>
						</Reveal>
					))}
				</div>
			</section>
		</div>
	);
}
