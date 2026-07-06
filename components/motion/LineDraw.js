"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "@styles/motion.module.css";

export default function LineDraw({ className }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return (
			<hr
				className={className}
				style={{
					border: "none",
					height: "1px",
					background: "var(--border)",
					width: "100%",
				}}
			/>
		);
	}

	return (
		<motion.hr
			className={className}
			initial={{ scaleX: 0, originX: 0 }}
			whileInView={{ scaleX: 1 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
			style={{
				border: "none",
				height: "1px",
				background: "var(--border)",
				width: "100%",
			}}
		/>
	);
}
