"use client";

import styles from "@styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerInfo}>
					<Link href="/" className={styles.footerLogo}>
						SK
					</Link>
					<p>
						&copy; {new Date().getFullYear()} Sarthak Karandikar.
						All Rights Reserved.
					</p>
				</div>
				<div className={styles.footerSocials}>
					<a
						href="https://www.linkedin.com/in/sarthak-karandikar-0223b7228/"
						aria-label="LinkedIn Profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-linkedin fa-lg" />
					</a>
					<a
						href="https://x.com/_itsskofficial_"
						aria-label="X/Twitter Profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-x-twitter fa-lg" />
					</a>
					<a
						href="https://wa.me/+918275017823"
						aria-label="WhatsApp Profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-whatsapp fa-lg" />
					</a>
					<a
						href="https://github.com/itsskofficial"
						aria-label="GitHub Profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-github fa-lg" />
					</a>
					<a
						href="mailto:itsskofficial03@gmail.com"
						aria-label="Email"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-envelope fa-lg" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
