import styles from "@styles/Skills.module.css";
import SkillsSkin from "./ui/SkillsSkin";
import { useState, useEffect, forwardRef } from "react";
import { useMediaQuery } from "usehooks-ts";

const Skills = (props) => {
	const [skillsOption, setSkillsOption] = useState("code");
	const [optionChanged, setOptionChanged] = useState(false);
	const isBigScreen = useMediaQuery("(min-width:1201px)");
	const [mediaMatch, setMediaMatch] = useState(true);

	useEffect(() => {
		if (isBigScreen == false) {
			setMediaMatch(false);
		}
	}, [isBigScreen]);

	useEffect(() => {
		if (optionChanged) {
			setTimeout(() => {
				setOptionChanged(false);
			}, 1000);
		}
	}, [skillsOption]);

	const bigScreen = (
		<section data-aos="fade-in" id="skills" className={styles.parent}>
			<div className={styles.skillsText}>
				<h1
					className={[
						styles.skillsTitle,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					Skills
				</h1>
				<div className={styles.skillsToggle}>
					<button
						className={[
							props.mode == "dark"
								? styles.skillsCode
								: styles.skillsCodeLight,
							skillsOption == "code"
								? props.mode == "dark"
									? styles.skillsActiveButton
									: styles.skillsActiveButtonLight
								: null,
						].join(" ")}
						onClick={() => {
							if (skillsOption != "code") {
								setSkillsOption("code");
								setOptionChanged(true);
							}
						}}
					>
						<i
							className="fa-solid fa-code"
							style={{ marginRight: "10px" }}
						/>
						Code
					</button>
					<button
						className={[
							props.mode == "dark"
								? styles.skillsTools
								: styles.skillsToolsLight,
							skillsOption == "tools"
								? props.mode == "dark"
									? styles.skillsActiveButton
									: styles.skillsActiveButtonLight
								: null,
						].join(" ")}
						onClick={() => {
							if (skillsOption != "tools") {
								setSkillsOption("tools");
								setOptionChanged(true);
							}
						}}
					>
						<i
							className="fa-solid fa-screwdriver-wrench"
							style={{ marginRight: "10px" }}
						/>
						Tools
					</button>
				</div>
			</div>
			<div
				className={[
					styles.skillsIcons,
					optionChanged ? styles.skillsIconsAnimate : null,
				].join(" ")}
			>
				<SkillsSkin option={skillsOption} mode={props.mode} />
			</div>
		</section>
	);

	const smallScreen = (
		<section data-aos="fade-in" id="skills" className={styles.parent}>
			<div className={styles.skillsText}>
				<h1
					className={[
						styles.skillsTitle,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					Skills
				</h1>
				<div
					className={[
						styles.skillsIcons,
						optionChanged ? styles.skillsIconsAnimate : null,
					].join(" ")}
				>
					<SkillsSkin option={skillsOption} mode={props.mode} />
				</div>
				<div className={styles.skillsToggle}>
					<button
						className={[
							props.mode == "dark"
								? styles.skillsCode
								: styles.skillsCodeLight,
							skillsOption == "code"
								? props.mode == "dark"
									? styles.skillsActiveButton
									: styles.skillsActiveButtonLight
								: null,
						].join(" ")}
						onClick={() => {
							if (skillsOption != "code") {
								setSkillsOption("code");
								setOptionChanged(true);
							}
						}}
					>
						<i
							className="fa-solid fa-code"
							style={{ marginRight: "10px" }}
						/>
						Code
					</button>
					<button
						className={[
							props.mode == "dark"
								? styles.skillsTools
								: styles.skillsToolsLight,
							skillsOption == "tools"
								? props.mode == "dark"
									? styles.skillsActiveButton
									: styles.skillsActiveButtonLight
								: null,
						].join(" ")}
						onClick={() => {
							if (skillsOption != "tools") {
								setSkillsOption("tools");
								setOptionChanged(true);
							}
						}}
					>
						<i
							className="fa-solid fa-screwdriver-wrench"
							style={{ marginRight: "10px" }}
						/>
						Tools
					</button>
				</div>
			</div>
		</section>
	);
	return mediaMatch ? bigScreen : smallScreen;
};

export default Skills;
