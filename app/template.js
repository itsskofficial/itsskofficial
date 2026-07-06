"use client";

import PageTransition from "@components/motion/PageTransition";

export default function Template({ children }) {
	return <PageTransition>{children}</PageTransition>;
}
