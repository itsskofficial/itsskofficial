import "@styles/globals.css";
import { Instrument_Serif, Inter, JetBrains_Mono, Allura } from "next/font/google";
import Providers from "@components/Providers";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import GrainOverlay from "@components/GrainOverlay";
import PageTransition from "@components/motion/PageTransition";

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-instrument-serif",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-inter",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

const allura = Allura({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-allura",
	display: "swap",
});

export const metadata = {
	title: "Sarthak Karandikar",
	description:
		"Thoughts on technology, science, and philosophy, and where they might lead us on consciousness.",
	icons: {
		icon: [
			{ url: "/assets/images/favicon.png" },
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
		<html
			lang="en"
			className={`dark ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} ${allura.variable}`}
		>
			<body>
				<Providers>
					<GrainOverlay />
					<NavBar />
					<main>
						<PageTransition>{children}</PageTransition>
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
