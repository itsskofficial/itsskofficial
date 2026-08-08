import ArtifactsIndex from "@components/ArtifactsIndex";
import { ARTIFACTS } from "@constants/artifacts";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
	title: "Artifacts",
	description:
		"Working objects from ongoing research by Sarthak Karandikar: maps, models and status boards, edited as the thinking moves.",
	path: "/artifacts",
});

export default function ArtifactsPage() {
	return <ArtifactsIndex artifacts={ARTIFACTS} />;
}
