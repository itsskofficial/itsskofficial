"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "@styles/About.module.css";
import Reveal from "@components/motion/Reveal";
import LineDraw from "@components/motion/LineDraw";
import TextReveal from "@components/motion/TextReveal";
import MagneticButton from "@components/motion/MagneticButton";

const About = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<>
			<div className={styles.divider}>
				<LineDraw />
			</div>
			<section id="about" className={styles.parent}>
				<div className={styles.watermark} aria-hidden="true">
					<span>ABOUT</span>
				</div>
				<div className={styles.inner}>
					<Reveal>
						<h2 className={styles.aboutTitle}>
							<TextReveal text="A Little About Me" as="span" />
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<motion.p
							className={styles.aboutInfo}
							initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
							whileInView={
								shouldReduceMotion ? false : { opacity: 1, y: 0 }
							}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								delay: 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							I&apos;ve spent the last seven years starting companies,
							building AI products, doing research, thinking about life,
							and learning from what didn&apos;t work.
						</motion.p>
					</Reveal>
					<Reveal delay={0.2}>
						<MagneticButton href="/about" className={styles.aboutButton}>
							Read my story
						</MagneticButton>
					</Reveal>
				</div>
				<div className={styles.cornerMarks} aria-hidden="true">
					<span className={styles.cornerTL} />
					<span className={styles.cornerBR} />
				</div>
			</section>
		</>
	);
};

export default About;
