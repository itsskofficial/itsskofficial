"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TextReveal({
	text,
	className,
	as: Tag = "span",
	delay = 0,
	stagger = 0.06,
}) {
	const shouldReduceMotion = useReducedMotion();
	const words = text.split(" ");

	if (shouldReduceMotion) {
		return <Tag className={className}>{text}</Tag>;
	}

	return (
		<Tag className={className} aria-label={text}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					style={{ display: "inline-block", marginRight: "0.25em" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: delay + i * stagger,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{word}
				</motion.span>
			))}
		</Tag>
	);
}
