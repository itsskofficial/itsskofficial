"use client";

import Articles from "@components/Articles";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BlogPage() {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
		Aos.refresh();
	}, []);

	return <Articles />;
}
