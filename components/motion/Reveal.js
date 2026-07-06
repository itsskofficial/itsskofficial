"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

export default function Reveal({
	children,
	className,
	delay = 0,
	duration = 0.6,
	as = "div",
	...props
}) {
	const shouldReduceMotion = useReducedMotion();
	const Component = motion[as] || motion.div;

	if (shouldReduceMotion) {
		const Static = as;
		return <Static className={className}>{children}</Static>;
	}

	return (
		<Component
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-80px" }}
			variants={defaultVariants}
			transition={{
				duration,
				delay,
				ease: [0.16, 1, 0.3, 1],
			}}
			{...props}
		>
			{children}
		</Component>
	);
}
