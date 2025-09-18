import Link from "next/link";
import styles from "@styles/Contact.module.css";

const Contact = () => {
	return (
		<div className={styles.contactIcons}>
			<Link
				href="https://www.linkedin.com/in/sarthak-karandikar-0223b7228/"
				aria-label="LinkedIn Profile"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-linkedin fa-2x" />
			</Link>
			<Link
				href="https://x.com/_itsskofficial_"
				aria-label="X/Twitter Profile"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-x-twitter fa-2x" />
			</Link>
			<Link
				href="https://wa.me/+918275017823/"
				aria-label="WhatsApp"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-brands fa-whatsapp fa-2x" />
			</Link>
			<Link
				href="mailto:itsskofficial03@gmail.com"
				aria-label="Email"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa-solid fa-envelope fa-2x" />
			</Link>
		</div>
	);
};

export default Contact;
