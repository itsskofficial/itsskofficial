import "@styles/globals.css";
import { ThemeProvider } from "@context/ThemeProvider";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Script from "next/script";

export const metadata = {
	title: "Sarthak Karandikar",
	description: "Thoughts on technology, science, and philosophy.",
	icons: {
		icon: [
			// This provides a fallback for all browsers
			{ url: "/assets/images/favicon.png" },
			// These are specific to light/dark modes
			{
				url: "/assets/images/faviconlight.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/assets/images/favicon.png",
				media: "(prefers-color-scheme: dark)",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<NavBar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
				<Script
					src="https://kit.fontawesome.com/638bbcf842.js"
					crossOrigin="anonymous"
				/>
			</body>
		</html>
	);
}
