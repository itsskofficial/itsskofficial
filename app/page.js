"use client";

import NavBar from "@components/NavBar";
import Header from "@components/Header";
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import { useState, useEffect, createRef, Fragment } from "react";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
	const headerRef = createRef();
	const aboutRef = createRef();
	const contactRef = createRef();
	const [mode, setMode] = useState("dark");

	const toggleMode = (userMode) => {
		setMode(userMode);
	};

	useEffect(() => {
		document.body.style.backgroundColor =
			mode === "dark" ? "#171717" : "#ffffff";

		const styleLink = document.createElement("link");
		styleLink.rel = "stylesheet";
		styleLink.type = "text/css";
		styleLink.href =
			mode === "dark"
				? "/assets/css/menu.css"
				: "/assets/css/menuLight.css";
		document.head.appendChild(styleLink);

		const faviconLink = document.createElement("link");
		faviconLink.rel = "icon";
		faviconLink.href =
			mode === "dark"
				? "/assets/images/favicon.png"
				: "/assets/images/faviconlight.png";
		document.head.appendChild(faviconLink);

		return () => {
			document.head.removeChild(styleLink);
			document.head.removeChild(faviconLink);
		};
	}, [mode]);

	useEffect(() => {
		Aos.init({ duration: 1000 });
		Aos.refresh();
	}, []);

	return (
		<Fragment>
			<main>
				<NavBar mode={mode} toggleMode={toggleMode} />
				<Header ref={headerRef} mode={mode} />
				<About ref={aboutRef} mode={mode} />
				<Contact ref={contactRef} mode={mode} />
				<Footer mode={mode} />
				<Script
					src="https://kit.fontawesome.com/638bbcf842.js"
					crossorigin="anonymous"
				/>
			</main>
		</Fragment>
	);
}
