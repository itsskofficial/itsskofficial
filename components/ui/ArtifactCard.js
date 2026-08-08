import Link from "next/link";
import styles from "@styles/Artifacts.module.css";

const ArtifactCard = ({ artifact, index = 0 }) => {
	const indexLabel = String(index + 1).padStart(2, "0");

	return (
		<Link
			href={`/artifacts/${artifact.slug}`}
			className={styles.artifactCard}
		>
			<div className={styles.artifactMain}>
				<div className={styles.artifactTop}>
					<span className={styles.artifactIndex}>{indexLabel}</span>
					<span className={styles.artifactKicker}>
						{artifact.kicker}
					</span>
				</div>
				<h2 className={styles.artifactTitle}>{artifact.title}</h2>
				<p className={styles.artifactSummary}>{artifact.summary}</p>

				{/* One bar, the whole status of the artifact at a glance. */}
				<div className={styles.mix} aria-hidden="true">
					{artifact.mix.map(({ status, count }) => (
						<span
							key={status}
							className={styles.mixSegment}
							data-status={status}
							style={{ flexGrow: count }}
						/>
					))}
				</div>
				<p className={styles.mixCaption}>
					Status of {artifact.total} tracked claims
				</p>
			</div>

			<div className={styles.artifactSide}>
				<dl className={styles.artifactFacts}>
					{artifact.facts.map((fact) => (
						<div key={fact.label} className={styles.artifactFact}>
							<dd className={styles.artifactFactValue}>
								{fact.value}
							</dd>
							<dt className={styles.artifactFactLabel}>
								{fact.label}
							</dt>
						</div>
					))}
				</dl>
				<span className={styles.artifactArrow}>
					Open <span aria-hidden="true">&rarr;</span>
				</span>
			</div>
		</Link>
	);
};

export default ArtifactCard;
