import styles from "@styles/ComingSoon.module.css";

const ComingSoon = (props) => {
	return (
		<section
			className={[
				styles.comingSoon,
				props.mode === "dark" ? styles.dark : styles.light,
			].join(" ")}
		>
			<div className={styles.content}>
				<h1 className={styles.title}>Coming Soon</h1>
				<p className={styles.description}>
					Something exciting is on its way. Stay tuned
				</p>
			</div>
		</section>
	);
};

export default ComingSoon;