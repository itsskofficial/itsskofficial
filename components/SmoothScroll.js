"use client";

import "lenis/dist/lenis.css";
import { useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }) {
	const [lenis, setLenis] = useState(null);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (shouldReduceMotion) return;

		const instance = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			smoothWheel: true,
		});

		setLenis(instance);

		let rafId;
		function raf(time) {
			instance.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(rafId);
			instance.destroy();
			setLenis(null);
		};
	}, [shouldReduceMotion]);

	return (
		<LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
	);
}
