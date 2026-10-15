import AboutClient from "@components/AboutClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
	title: "About",
	description:
		"How I went from coding at 8 to starting companies, building AI products, and working on the biggest open questions.",
	path: "/about",
});

export default function AboutPage() {
	return <AboutClient />;
}
