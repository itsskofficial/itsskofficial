"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({ children, href, className, onClick }) {
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		if (shouldReduceMotion || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setPosition({ x: x * 0.12, y: y * 0.12 });
	};

	const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

	const inner = (
		<motion.span
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15 }}
			style={{ display: "inline-flex", alignItems: "center", gap: "inherit" }}
		>
			{children}
		</motion.span>
	);

	if (href) {
		return (
			<Link href={href} className={className}>
				{inner}
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={className}
			style={{ border: "none", background: "none", padding: 0, cursor: "none" }}
		>
			{inner}
		</button>
	);
}
