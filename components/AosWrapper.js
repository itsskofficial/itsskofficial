"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosWrapper({ children }) {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
		Aos.refresh();
	}, []);

	return <>{children}</>;
}