import { notFound } from "next/navigation";
import ConsciousnessMap from "@components/ConsciousnessMap";
import JsonLd from "@components/JsonLd";
import { ARTIFACTS, getArtifact } from "@constants/artifacts";
import { createMetadata, absoluteUrl } from "@/lib/seo";
import { getSiteUrl, siteConfig } from "@/lib/site";

/** Each artifact is a bespoke view rather than a body of text. */
const VIEWS = {
	"consciousness-map": ConsciousnessMap,
};

export function generateStaticParams() {
	return ARTIFACTS.map((artifact) => ({ slug: artifact.slug }));
}

export function generateMetadata({ params }) {
	const artifact = getArtifact(params.slug);
	if (!artifact) return {};

	return createMetadata({
		title: artifact.title,
		description: artifact.description,
		path: `/artifacts/${artifact.slug}`,
	});
}

export default function ArtifactPage({ params }) {
	const artifact = getArtifact(params.slug);
	const View = VIEWS[params.slug];

	if (!artifact || !View) {
		notFound();
	}

	const artifactJsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: artifact.title,
		description: artifact.description,
		url: absoluteUrl(`/artifacts/${artifact.slug}`),
		author: {
			"@type": "Person",
			name: siteConfig.author,
			url: getSiteUrl(),
		},
		inLanguage: "en-US",
	};

	return (
		<>
			<JsonLd data={artifactJsonLd} />
			<View />
		</>
	);
}
