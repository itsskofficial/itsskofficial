"use client"

import NavBar from "@components/NavBar";
import Skills from "@components/Skills";
import Footer from "@components/Footer";
import { useState, useEffect, Fragment } from "react";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "@components/Projects";
import Existence from "@components/Existence";

export default function Technology() {
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
				<NavBar
					mode={mode}
					toggleMode={toggleMode}
				/>
				<Existence mode={mode} />
				<Skills mode={mode} />
				<Projects mode={mode} />
				<Footer mode={mode} />
				<Script
					src="https://kit.fontawesome.com/638bbcf842.js"
					crossorigin="anonymous"
				/>
			</main>
		</Fragment>
	);
}