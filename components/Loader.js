"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "@styles/Loader.module.css";

export default function Loader() {
	const shouldReduceMotion = useReducedMotion();
	const [phase, setPhase] = useState("loading");
	const [skip, setSkip] = useState(true);

	useEffect(() => {
		if (shouldReduceMotion) {
			setSkip(true);
			return;
		}
		const seen = sessionStorage.getItem("sk-loader-seen");
		if (seen) {
			setSkip(true);
			return;
		}
		setSkip(false);
		const t1 = setTimeout(() => setPhase("reveal"), 600);
		const t2 = setTimeout(() => {
			setPhase("done");
			sessionStorage.setItem("sk-loader-seen", "1");
		}, 1200);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	}, [shouldReduceMotion]);

	if (skip || phase === "done") return null;

	return (
		<motion.div
			className={styles.overlay}
			initial={{ opacity: 1 }}
			animate={{ opacity: phase === "reveal" ? 0 : 1 }}
			transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
		>
			<div className={styles.content}>
				<motion.div
					className={styles.line}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				/>
				<motion.span
					className={styles.logo}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
				>
					SK
				</motion.span>
			</div>
		</motion.div>
	);
}
