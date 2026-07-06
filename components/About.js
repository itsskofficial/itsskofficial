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
							I build things, follow hard questions, and write when
							something is worth saying out loud. There is more to it than
							fits on a homepage.
						</motion.p>
					</Reveal>
					<Reveal delay={0.2}>
						<MagneticButton href="/about" className={styles.aboutButton}>
							Learn More
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
