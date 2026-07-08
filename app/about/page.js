import AboutClient from "@components/AboutClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
	title: "About",
	description:
		"Builder and independent researcher. Technology, science, and philosophy as lenses; consciousness as a long-term goal.",
	path: "/about",
});

export default function AboutPage() {
	return <AboutClient />;
}
