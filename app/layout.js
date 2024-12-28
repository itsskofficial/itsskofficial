import "styles/globals.css";
import Head from "next/head";

export const metadata = {
	title: "Sarthak Karandikar",
	description: "SK's Portfolio",
};

export default function RootLayout({ children }) {
	const mode =
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href={
						mode === "dark"
							? "/assets/images/favicon.png"
							: "/assets/images/faviconlight.png"
					}
				/>
				<link
					rel="stylesheet"
					href={
						mode === "dark"
							? "/assets/css/menu.css"
							: "/assets/css/menuLight.css"
					}
					type="text/css"
				/>
			</Head>
			<body>{children}</body>
		</html>
	);
}