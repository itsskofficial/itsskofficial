import {
	BRANCHES,
	STATUS_ORDER,
	countStatuses,
} from "@constants/consciousnessMap";

const consciousness = countStatuses(BRANCHES);

/**
 * The artifact index. An artifact is a working object I keep editing: a map,
 * a model, a status board, as opposed to an article, which is finished.
 * Each entry needs a matching view in app/artifacts/[slug]/page.js.
 */
export const ARTIFACTS = [
	{
		slug: "consciousness-map",
		title: "The Consciousness Map",
		kicker: "Living document",
		summary:
			"Every claim I have chased on consciousness, across nine domains (from the hard problem to clinical PCI thresholds to Advaita reflection theory), tagged by where it actually stands. Green is checked and holding. Red is where the work is stuck.",
		description:
			"A living status board of every claim, theory and open question in my consciousness research, across nine domains, tagged by where each one actually stands.",
		facts: [
			{ label: "Domains", value: BRANCHES.length },
			{ label: "Claims", value: consciousness.total },
			{ label: "Open", value: consciousness.counts.open },
		],
		total: consciousness.total,
		mix: STATUS_ORDER.map((status) => ({
			status,
			count: consciousness.counts[status],
		})).filter((segment) => segment.count > 0),
	},
];

export function getArtifact(slug) {
	return ARTIFACTS.find((artifact) => artifact.slug === slug) || null;
}
