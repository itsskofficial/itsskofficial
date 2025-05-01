import styles from "@styles/Existence.module.css";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";

const Existence = (props) => {
	const isBigScreen = useMediaQuery("(min-width:1201px)");
	let mediaMatch = true;

	useEffect(() => {
		if (!isBigScreen) {
			mediaMatch = false;
		}
	}, [isBigScreen]);

	return (
		<section data-aos="fade-in" id="existence" className={styles.parent}>
			<div className={styles.existenceImage}>
				<Image
					src={
						props.mode === "dark"
							? "/assets/images/existence.png"
							: "/assets/images/existencelight.png"
					}
					width={mediaMatch ? "450" : "300"}
					height={mediaMatch ? "450" : "300"}
					alt="Existence Image"
				/>
			</div>
			<div className={styles.existenceText}>
				<h1
					className={[
						styles.existenceTitle,
						props.mode === "dark" ? null : styles.light,
					].join(" ")}
				>
					Existence
				</h1>
				<h2
					className={[
						styles.existenceInfo,
						props.mode === "dark" ? null : styles.light,
					].join(" ")}
				>
					Existence is my startup focused on building radical user-centric products using cutting-edge technology. We are currently building <strong>Sentient</strong>, a proactive AI companion to make your digital life simpler
				</h2>
				<button
					className={
						props.mode === "dark"
							? styles.existenceButton
							: styles.existenceButtonLight
					}
					onClick={() => {
						window.open("https://existence.technology", "_blank");
					}}
				>
					Visit Website
				</button>
			</div>
		</section>
	);
}

export default Existence;
