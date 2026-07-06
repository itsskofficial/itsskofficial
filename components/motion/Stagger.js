"use client";

import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
	},
};

export function Stagger({ children, className, ...props }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-60px" }}
			variants={containerVariants}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({ children, className, ...props }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div className={className} variants={itemVariants} {...props}>
			{children}
		</motion.div>
	);
}
