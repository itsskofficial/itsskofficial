import Reveal from "@components/motion/Reveal";
import LineDraw from "@components/motion/LineDraw";
import styles from "@styles/WorkFields.module.css";

const fields = [
	{
		label: "STARTUPS",
		text: "Founded and worked across multiple early-stage companies, shipping product, not slides.",
	},
	{
		label: "OPEN SOURCE",
		text: "Contribute in public; prefer tools that outlive the pitch deck.",
	},
	{
		label: "NOW",
		text: "Founding engineer at a startup. Building by day; researching and writing on the side.",
	},
	{
		label: "ALSO",
		text: "Content creation, thinking out loud, not performing for an audience.",
	},
];

export default function WorkFields() {
	return (
		<section className={styles.section}>
			<div className={styles.divider}>
				<LineDraw />
			</div>
			<div className={styles.inner}>
				<div className={styles.list}>
					{fields.map((field, i) => (
						<Reveal
							key={field.label}
							delay={i * 0.08}
							className={`${styles.row} ${i % 2 === 1 ? styles.rowAlt : ""}`}
						>
							<span className={styles.label}>{field.label}</span>
							<p className={styles.text}>{field.text}</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
