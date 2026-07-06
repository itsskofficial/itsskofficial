"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "@styles/CustomCursor.module.css";

export default function CustomCursor() {
	const shouldReduceMotion = useReducedMotion();
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isPointer, setIsPointer] = useState(false);
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		if (shouldReduceMotion) return;

		const isTouchDevice =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;
		setIsTouch(isTouchDevice);
		if (isTouchDevice) return;

		const move = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const over = (e) => {
			const target = e.target;
			setIsPointer(
				target.closest("a, button, [role='button'], input, label") !== null
			);
		};

		window.addEventListener("mousemove", move);
		window.addEventListener("mouseover", over);
		document.body.classList.add("custom-cursor-active");

		return () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseover", over);
			document.body.classList.remove("custom-cursor-active");
		};
	}, [shouldReduceMotion]);

	if (shouldReduceMotion || isTouch) return null;

	return (
		<>
			<motion.div
				className={styles.dot}
				animate={{
					x: position.x - 4,
					y: position.y - 4,
					scale: isPointer ? 0.5 : 1,
				}}
				transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
			/>
			<motion.div
				className={styles.ring}
				animate={{
					x: position.x - 20,
					y: position.y - 20,
					scale: isPointer ? 1.5 : 1,
				}}
				transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
			/>
		</>
	);
}
