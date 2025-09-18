"use client";

import { useState } from "react";
import styles from "@styles/NavBar.module.css";
import Link from "next/link";
import { useTheme } from "@context/ThemeProvider";

const NavBar = () => {
	const { mode, toggleMode } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	const links = [
		{ id: 0, name: "Home", href: "/" },
		{ id: 1, name: "Blog", href: "/blog" },
		{ id: 2, name: "About", href: "/about" },
	];

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.logo} onClick={closeMenu}>
					SK
				</Link>

				<div
					className={`${styles.navLinksContainer} ${
						isMenuOpen ? styles.active : ""
					}`}
				>
					<ul className={styles.navList}>
						{links.map((link) => (
							<li key={link.id}>
								<Link
									href={link.href}
									className={styles.navLink}
									onClick={closeMenu}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<button
						onClick={toggleMode}
						className={styles.themeToggle}
						aria-label="Toggle theme"
					>
						<i
							className={`fa-solid fa-${
								mode === "dark" ? "sun" : "moon"
							}`}
						/>
					</button>
				</div>

				<button
					className={styles.hamburgerButton}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<i
						className={`fa-solid ${
							isMenuOpen ? "fa-times" : "fa-bars"
						}`}
					/>
				</button>
			</nav>
		</header>
	);
};

export default NavBar;
