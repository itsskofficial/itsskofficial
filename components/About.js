import styles from "@styles/About.module.css";
import Image from "next/image";
import { forwardRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";
import useDownloader from "react-use-downloader";

const About = (props) => {
	const isBigScreen = useMediaQuery("(min-width:1201px)");
	const { download } = useDownloader();
	let mediaMatch = true;

	useEffect(() => {
		if (!isBigScreen) {
			mediaMatch = false;
		}
	}, [isBigScreen]);

	return (
		<section data-aos="fade-in" id="about" className={styles.parent}>
			<div className={styles.aboutImage}>
				<Image
					src={
						props.mode === "dark"
							? "/assets/images/about.jpg"
							: "/assets/images/aboutlight.jpg"
					}
					width={mediaMatch ? "450" : "300"}
					height={mediaMatch ? "450" : "300"}
					alt="About Image"
				/>
			</div>
			<div className={styles.aboutText}>
				<h1
					className={[
						styles.aboutTitle,
						props.mode === "dark" ? null : styles.light,
					].join(" ")}
				>
					About
				</h1>
				<h2
					className={[
						styles.aboutInfo,
						props.mode === "dark" ? null : styles.light,
					].join(" ")}
				>
					I am a curious individual passionate about technology,
					science, and philosophy. From understanding the complexities
					of the universe to exploring human creativity, I thrive in
					the intersection of logical and artistic pursuits. Check out
					my purpose and vision.
				</h2>
				<button
					className={
						props.mode === "dark"
							? styles.aboutButton
							: styles.aboutButtonLight
					}
					onClick={() => {
						download(
							"/assets/resources/purpose.pdf",
							"purpose.pdf"
						);
					}}
				>
					<i
						className="fa-solid fa-file"
						style={{ marginRight: "10px" }}
					/>
					Download Purpose
				</button>
			</div>
		</section>
	);
}

export default About;