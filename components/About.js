import styles from "@styles/About.module.css";
import Link from "next/link";

const About = () => {
	return (
		<section id="about" className={styles.parent} data-aos="fade-up">
			<h2 className={styles.aboutTitle}>A Little About Me</h2>
			<p className={styles.aboutInfo}>
				I'm a builder and writer, fascinated by the intersection of
				technology and humanity. I created this space to explore ideas,
				share what I'm learning, and connect with like-minded people.
			</p>
			<Link href="/about" className={styles.aboutButton}>
				Learn More About Me
			</Link>
		</section>
	);
};

export default About;
