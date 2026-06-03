import styles from "@styles/About.module.css";
import Link from "next/link";

const About = () => {
	return (
		<section id="about" className={styles.parent} data-aos="fade-up">
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
		</section>
	);
};

export default About;
