"use client";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Articles from "@components/Articles";
import { useState, useEffect, Fragment } from "react";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Poetry() {
	const [mode, setMode] = useState("dark");

	const toggleMode = (userMode) => {
		setMode(userMode);
	};
	useEffect(() => {
		if (mode == "dark") document.body.style.backgroundColor = "#171717";
		else document.body.style.backgroundColor = "#ffffff";
	}, [mode]);

	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
		Aos.refresh();
	}, []);

	return (
		<Fragment>
			<main>
				<NavBar mode={mode} toggleMode={toggleMode} />
				<Articles mode={mode} />
				<Footer mode={mode} />
				<Script
					src="https://kit.fontawesome.com/638bbcf842.js"
					crossorigin="anonymous"
				/>
			</main>
		</Fragment>
	);
}
