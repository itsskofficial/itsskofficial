import styles from "@styles/Projects.module.css";
import ProjectSkin from "./ui/ProjectSkin";
import {  useState, useEffect } from "react";
import projectsData from "../public/assets/js/ProjectsData";
import { useMediaQuery } from "usehooks-ts";

const Projects = (props) => {
	const [projectId, setProjectId] = useState(1);
	const isBigScreen = useMediaQuery("(min-width:1201px)");
	const [mediaMatch, setMediaMatch] = useState(true);
	const [changeState, setChangeState] = useState(false);

	useEffect(() => {
		if (isBigScreen == false) {
			setMediaMatch(false);
		}
	}, [isBigScreen]);

	useEffect(() => {
		if (changeState) {
			setTimeout(() => {
				setChangeState(false);
			}, 1000);
		}
	}, [projectId]);

	const handleKeyChange = (state) => {
		if (state == "previous") {
			setProjectId((prevState) => prevState - 1);
			setChangeState(true);
		} else {
			setProjectId((prevState) => prevState + 1);
			setChangeState(true);
		}
	};

	const bigScreen = (
		<section data-aos="fade-in" id="projects" className={styles.parent}>
			<div className={styles.projectsSlider}>
				<button
					className={styles.projectsPrevious}
					onClick={() => handleKeyChange("previous")}
					disabled={projectId == 1 ? true : false}
				>
					<i
						className={`fa-solid fa-chevron-left fa-${
							mediaMatch ? "3x" : "2x"
						}`}
						style={{
							color:
								projectId == 1
									? "grey"
									: props.mode == "dark"
									? "white"
									: "#171717",
						}}
					/>
				</button>
				<ProjectSkin
					id={projectId}
					mode={props.mode}
					changeState={changeState}
				/>
				<button
					className={styles.projectsNext}
					onClick={() => handleKeyChange("next")}
					disabled={projectId == projectsData.length ? true : false}
				>
					<i
						className={`fa-solid fa-chevron-right fa-${
							mediaMatch ? "3x" : "2x"
						}`}
						style={{
							color:
								projectId == projectsData.length
									? "grey"
									: props.mode == "dark"
									? "white"
									: "#171717",
						}}
					/>
				</button>
			</div>
			<div className={styles.projectsText}>
				<h1
					className={[
						styles.projectsTitle,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					Projects
				</h1>
				<h2
					className={[
						styles.projectsInfo,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					I continuously work on personal & professional projects.
					Some of them can't be deployed but you can check them on my
					GitHub. However these are the deployed ones right now.
					Others in production progress
				</h2>
				<button
					className={
						props.mode == "dark"
							? styles.projectsGithub
							: styles.projectsGithubLight
					}
				>
					<a href="https://github.com/itsskofficial">
						<i
							className="fa-brands fa-github"
							style={{ marginRight: "10px" }}
						/>
						Check My GitHub
					</a>
				</button>
			</div>
		</section>
	);

	const smallScreen = (
		<section data-aos="fade-in" id="projects" className={styles.parent}>
			<div className={styles.projectsText}>
				<h1
					className={[
						styles.projectsTitle,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					Projects
				</h1>
				<div className={styles.projectsSlider}>
					<button
						className={styles.projectsPrevious}
						onClick={() => handleKeyChange("previous")}
						disabled={projectId == 1 ? true : false}
					>
						<i
							className={`fa-solid fa-chevron-left fa-${
								mediaMatch ? "3x" : "2x"
							}`}
							style={{
								color:
									projectId == 1
										? "grey"
										: props.mode == "dark"
										? "white"
										: "#171717",
							}}
						/>
					</button>
					<ProjectSkin
						id={projectId}
						mode={props.mode}
						changeState={changeState}
					/>
					<button
						className={styles.projectsNext}
						onClick={() => handleKeyChange("next")}
						disabled={
							projectId == projectsData.length ? true : false
						}
					>
						<i
							className={`fa-solid fa-chevron-right fa-${
								mediaMatch ? "3x" : "2x"
							}`}
							style={{
								color:
									projectId == projectsData.length
										? "grey"
										: props.mode == "dark"
										? "white"
										: "#171717",
							}}
						/>
					</button>
				</div>
				<h2
					className={[
						styles.projectsInfo,
						props.mode == "dark" ? null : styles.light,
					].join(" ")}
				>
					I continuously work on personal & professional projects.
					Some of them can't be deployed but you can check them on my
					GitHub. However these are the deployed ones right now.
					Others in production progress
				</h2>
				<button
					className={
						props.mode == "dark"
							? styles.projectsGithub
							: styles.projectsGithubLight
					}
				>
					<a href="https://github.com/itsskofficial">
						<i
							className="fa-brands fa-github"
							style={{
								marginRight: "10px",
								color:
									props.mode == "dark" ? "white" : "#171717",
							}}
						/>
						Check My GitHub
					</a>
				</button>
			</div>
		</section>
	);

	return mediaMatch ? bigScreen : smallScreen;
};

export default Projects;
