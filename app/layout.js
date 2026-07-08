import "@styles/globals.css";
import { Instrument_Serif, Inter, JetBrains_Mono, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@components/Providers";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import GrainOverlay from "@components/GrainOverlay";
import JsonLd from "@components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site";

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
	...createMetadata({
		title: siteConfig.title,
		description: siteConfig.description,
		path: "/",
	}),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.name}`,
	},
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

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${getSiteUrl()}/#website`,
			url: getSiteUrl(),
			name: siteConfig.name,
			description: siteConfig.description,
			inLanguage: "en-US",
		},
		{
			"@type": "Person",
			"@id": `${getSiteUrl()}/#person`,
			name: siteConfig.author,
			url: getSiteUrl(),
			sameAs: [
				"https://www.linkedin.com/in/sarthak-karandikar-0223b7228/",
				"https://x.com/_itsskofficial_",
				"https://github.com/itsskofficial",
				"https://www.youtube.com/@itsskofficial3",
			],
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`dark ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} ${allura.variable}`}
		>
			<body>
				<JsonLd data={websiteJsonLd} />
				<Providers>
					<GrainOverlay />
					<NavBar />
					<main>{children}</main>
					<Footer />
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
