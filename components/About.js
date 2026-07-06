import styles from "@styles/About.module.css";
import Link from "next/link";
import Reveal from "@components/motion/Reveal";
import LineDraw from "@components/motion/LineDraw";

const About = () => {
	return (
		<>
			<div className={styles.divider}>
				<LineDraw />
			</div>
			<section id="about" className={styles.parent}>
				<Reveal>
					<p className="sectionLabel">// ABOUT</p>
					<h2 className={styles.aboutTitle}>A Little About Me</h2>
					<p className={styles.aboutInfo}>
						I&apos;m a builder who also does independent research. I write
						about technology, science, and philosophy, and over the long
						run, I hope those threads help me contribute to understanding
						consciousness. This site is where I think in public.
					</p>
					<Link href="/about" className={styles.aboutButton}>
						Learn more about me
					</Link>
				</Reveal>
			</section>
		</>
	);
};

export default About;
