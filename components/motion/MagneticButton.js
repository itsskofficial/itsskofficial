"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({
	children,
	href,
	className,
	onClick,
	...props
}) {
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		if (shouldReduceMotion || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setPosition({ x: x * 0.15, y: y * 0.15 });
	};

	const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

	const motionProps = shouldReduceMotion
		? {}
		: {
				animate: { x: position.x, y: position.y },
				transition: { type: "spring", stiffness: 150, damping: 15 },
			};

	const content = (
		<motion.span
			ref={ref}
			className={className}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			{...motionProps}
			{...props}
		>
			{children}
		</motion.span>
	);

	if (href) {
		return (
			<Link href={href} className={className} style={{ display: "inline-block" }}>
				{content}
			</Link>
		);
	}

	return (
		<button type="button" onClick={onClick} className={className} style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}>
			{content}
		</button>
	);
}
