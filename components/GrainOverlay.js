import styles from "@styles/motion.module.css";

export default function GrainOverlay() {
	return (
		<svg className={styles.grain} aria-hidden="true" width="100%" height="100%">
			<filter id="grain">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.8"
					numOctaves="4"
					stitchTiles="stitch"
				/>
				<feColorMatrix type="saturate" values="0" />
			</filter>
			<rect width="100%" height="100%" filter="url(#grain)" />
		</svg>
	);
}
