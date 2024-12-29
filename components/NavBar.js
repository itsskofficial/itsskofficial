import styles from "@styles/NavBar.module.css";
import menuStyles from "@public/assets/css/menu.module.css";
import menuStylesLight from "@public/assets/css/menuLight.module.css";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

const NavBar = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isBigScreen = useMediaQuery("(min-width:1201px)");
	const [mediaMatch, setMediaMatch] = useState(true);
	const burgerMenuClasses = [
		menuStyles["bm-burger-button"],
		menuStyles["bm-burger-bars"],
		menuStyles["bm-burger-bars-hover"],
		menuStyles["bm-cross-button"],
		menuStyles["bm-cross"],
		menuStyles["bm-menu-wrap"],
		menuStyles["bm-morph-shape"],
		menuStyles["bm-item-list"],
		menuStyles["bm-item"],
		menuStyles["bm-overlay"],
	];
	const burgerMenuClassesLight = [
		menuStylesLight["bm-burger-button"],
		menuStylesLight["bm-burger-bars"],
		menuStylesLight["bm-burger-bars-hover"],
		menuStylesLight["bm-cross-button"],
		menuStylesLight["bm-cross"],
		menuStylesLight["bm-menu-wrap"],
		menuStylesLight["bm-morph-shape"],
		menuStylesLight["bm-item-list"],
		menuStylesLight["bm-item"],
		menuStylesLight["bm-overlay"],
	];

	console.log(menuStyles)
	console.log(menuStylesLight)


	useEffect(() => {
		setMediaMatch(isBigScreen);
	}, [isBigScreen]);

	const links = [
		{ id: 0, name: "Home", href: "/" },
		{ id: 1, name: "Technology", href: "/technology" },
		{ id: 2, name: "Science", href: "/science" },
		{ id: 3, name: "Philosophy", href: "/philosophy" },
	];

	const extras = [
		{ id: 0, name: "Blog", href: "/blog" },
		{ id: 1, name: "Poetry", href: "/poetry" }
	];

	const [navlinks, setNavlinks] = useState(links);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleMenuChange = (state) => {
		setIsMenuOpen(state.isOpen);
	};

	const bigScreen = (
		<section
			className={
				props.mode === "dark" ? styles.parent : styles.parentLight
			}
		>
			<h2
				className={[
					styles.navbarLogo,
					props.mode === "dark" ? null : styles.light,
				].join(" ")}
			>
				SK
			</h2>
			<ul className={styles.navList} style={{ listStyleType: "none" }}>
				{navlinks.map((link) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={
								props.mode === "dark"
									? styles.navLink
									: styles.navLinkLight
							}
						>
							{link.name}
						</Link>
					</li>
				))}
				<li className={styles.dropdown}>
					<span
						className={
							props.mode === "dark"
								? styles.navLink
								: styles.navLinkLight
						}
					>
						Extras
					</span>
					<ul className={
							props.mode === "dark"
								? styles.dropdownMenu
								: styles.dropdownMenuLight
						}>
						{extras.map((extra) => (
							<li key={extra.id}>
								<Link
									href={extra.href}
									className={
										props.mode === "dark"
											? styles.navLink
											: styles.navLinkLight
									}
								>
									{extra.name}
								</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
			<span
				onClick={() => {
					props.toggleMode(props.mode === "light" ? "dark" : "light");
				}}
			>
				<i
					className={`fa-solid fa-${
						props.mode === "dark" ? "moon" : "sun"
					}`}
					style={{ color: props.mode === "dark" ? null : "#171717" }}
				/>
			</span>
		</section>
	);

	const smallScreen = (
		<section
			className={
				props.mode === "dark" ? styles.parent : styles.parentLight
			}
		>
			<h2
				className={[
					styles.navbarLogo,
					props.mode === "dark" ? null : styles.light,
				].join(" ")}
			>
				SK
			</h2>
			<Menu
				className={[
					props.mode == "dark"
						? burgerMenuClasses
						: burgerMenuClassesLight,
				].join(" ")}
				right
				width={150}
				isOpen={isMenuOpen}
				onStateChange={handleMenuChange}
			>
				{navlinks.map((link) => (
					<Link
						key={link.id}
						href={link.href}
						className={
							props.mode === "dark"
								? styles.navLink
								: styles.navLinkLight
						}
						onClick={closeMenu}
					>
						{link.name}
					</Link>
				))}
				<div>
					<span
						className={
							props.mode === "dark"
								? styles.navLink
								: styles.navLinkLight
						}
					>
						Extras
					</span>
					<ul
						className={
							props.mode === "dark"
								? styles.dropdownMenu
								: styles.dropdownMenuLight
						}
					>
						{extras.map((extra) => (
							<li key={extra.id}>
								<Link
									href={extra.href}
									className={
										props.mode === "dark"
											? styles.navLink
											: styles.navLinkLight
									}
									onClick={closeMenu}
								>
									{extra.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<span
					onClick={() => {
						props.toggleMode(
							props.mode === "light" ? "dark" : "light"
						);
					}}
				>
					<i
						className={`fa-solid fa-${
							props.mode === "dark" ? "moon" : "sun"
						}`}
						style={{
							color: props.mode === "dark" ? null : "#171717",
						}}
					/>
				</span>
			</Menu>
		</section>
	);

	return mediaMatch ? bigScreen : smallScreen;
};

export default NavBar;
