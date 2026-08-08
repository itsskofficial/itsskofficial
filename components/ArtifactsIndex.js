import ArtifactCard from "@components/ui/ArtifactCard";
import Reveal from "@components/motion/Reveal";
import TextReveal from "@components/motion/TextReveal";
import { Stagger, StaggerItem } from "@components/motion/Stagger";
import styles from "@styles/Artifacts.module.css";

const ArtifactsIndex = ({ artifacts }) => {
	return (
		<section className={styles.container}>
			<Reveal>
				<h1 className={styles.title}>
					<TextReveal text="Artifacts" as="span" />
				</h1>
				<p className={styles.subtitle}>
					Working objects rather than finished essays. Maps, models and
					status boards from research still in motion. Each one gets
					edited as the thinking moves.
				</p>
			</Reveal>

			<Stagger className={styles.cardsGrid}>
				{artifacts.map((artifact, index) => (
					<StaggerItem key={artifact.slug}>
						<ArtifactCard artifact={artifact} index={index} />
					</StaggerItem>
				))}
			</Stagger>
		</section>
	);
};

export default ArtifactsIndex;
