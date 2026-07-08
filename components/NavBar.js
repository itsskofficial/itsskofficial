"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "@styles/NavBar.module.css";
import Link from "next/link";
import { useTheme } from "@context/ThemeProvider";
import { useLenis } from "@components/SmoothScroll";

const links = [
	{ id: 0, name: "Home", href: "/" },
	{ id: 1, name: "Blog", href: "/blog" },
	{ id: 2, name: "About", href: "/about" },
];

const COMPACT_NAV_QUERY = "(max-width: 768px)";

function SunIcon() {
	return (
		<svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

const NavBar = () => {
	const { mode, toggleMode } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [isCompactNav, setIsCompactNav] = useState(false);
	const pathname = usePathname();
	const lenis = useLenis();

	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen((open) => !open);

	const isActive = (href) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	};

	useEffect(() => {
		closeMenu();
	}, [pathname]);

	useEffect(() => {
		const mq = window.matchMedia(COMPACT_NAV_QUERY);
		const update = () => setIsCompactNav(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		if (!isCompactNav) {
			closeMenu();
		}
	}, [isCompactNav]);

	useEffect(() => {
		document.documentElement.classList.toggle("nav-menu-open", isMenuOpen);

		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.documentElement.classList.remove("nav-menu-open");
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	useEffect(() => {
		if (!lenis) return;
		if (isMenuOpen) {
			lenis.stop();
		} else {
			lenis.start();
		}
	}, [isMenuOpen, lenis]);

	useEffect(() => {
		if (isCompactNav) return;

		let lastScroll = 0;

		const onScroll = ({ scroll, direction }) => {
			if (scroll < 80) {
				setHidden(false);
				return;
			}
			setHidden(direction === 1);
			lastScroll = scroll;
		};

		if (lenis) {
			lenis.on("scroll", onScroll);
			return () => lenis.off("scroll", onScroll);
		}

		const fallback = () => {
			const y = window.scrollY;
			if (y < 80) {
				setHidden(false);
			} else {
				setHidden(y > lastScroll);
			}
			lastScroll = y;
		};
		window.addEventListener("scroll", fallback, { passive: true });
		return () => window.removeEventListener("scroll", fallback);
	}, [lenis, isCompactNav]);

	return (
		<motion.header
			className={`${styles.header} ${isMenuOpen ? styles.headerMenuOpen : ""}`}
			initial={false}
			animate={{ y: hidden && !isMenuOpen && !isCompactNav ? -100 : 0 }}
			transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
		>
			<nav className={styles.nav} aria-label="Main navigation">
				<Link href="/" className={styles.logo} onClick={closeMenu}>
					SK
				</Link>

				<div
					id="mobile-nav"
					className={`${styles.navLinksContainer} ${
						isCompactNav && isMenuOpen ? styles.active : ""
					}`}
					aria-hidden={isCompactNav ? !isMenuOpen : undefined}
				>
					<ul className={styles.navList}>
						{links.map((link) => (
							<li key={link.id}>
								<Link
									href={link.href}
									className={`${styles.navLink} ${
										isActive(link.href) ? styles.navLinkActive : ""
									}`}
									onClick={closeMenu}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<button onClick={toggleMode} className={styles.themeToggle} aria-label="Toggle theme">
						{mode === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
				</div>

				<button
					type="button"
					className={`${styles.hamburgerButton} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
					onClick={toggleMenu}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav"
				>
					<span className={styles.hamburgerIcon} />
				</button>
			</nav>
		</motion.header>
	);
};

export default NavBar;
