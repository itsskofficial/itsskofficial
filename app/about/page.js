import AosWrapper from "@components/AosWrapper";
import AboutClient from "@components/AboutClient";

export const metadata = {
	title: "About | Sarthak Karandikar",
	description:
		"Builder and independent researcher. Technology, science, and philosophy as lenses; consciousness as a long-term goal.",
};

export default function AboutPage() {
	return (
		<AosWrapper>
			<AboutClient />
		</AosWrapper>
	);
}
