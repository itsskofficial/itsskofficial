import {
	BRANCHES,
	MAP_ROOT,
	STATUS_ORDER,
	countStatuses,
} from "@constants/consciousnessMap";

/**
 * Two palettes so the diagram sits inside the page rather than on top of it.
 * Mermaid bakes colours into the SVG, so the chart has to be rebuilt whenever
 * the site theme flips.
 */
const PALETTES = {
	dark: {
		root: { fill: "#fafafa", stroke: "#fafafa", text: "#000000" },
		group: { fill: "#131313", stroke: "#3a3a3a", text: "#f2f2f2" },
		established: { fill: "#0d2218", stroke: "#2f8f5b", text: "#9fe3bd" },
		inplay: { fill: "#0c1c2d", stroke: "#3a72c2", text: "#a4c9f2" },
		resolved: { fill: "#0a2220", stroke: "#2a8d84", text: "#98ded4" },
		open: { fill: "#291214", stroke: "#c0453f", text: "#efa8a3" },
		hypothesis: { fill: "#291a09", stroke: "#bd7c22", text: "#eec282" },
		personal: { fill: "#1d1130", stroke: "#7a4dbb", text: "#ccafee" },
		planned: { fill: "#282308", stroke: "#ab8f19", text: "#e8d379" },
		line: "#3d3d3d",
	},
	light: {
		root: { fill: "#0a0a0a", stroke: "#0a0a0a", text: "#ffffff" },
		group: { fill: "#f2f2f2", stroke: "#c9c9c9", text: "#0a0a0a" },
		established: { fill: "#e9f6ee", stroke: "#2f8f5b", text: "#14432a" },
		inplay: { fill: "#e9f1fc", stroke: "#3a72c2", text: "#173156" },
		resolved: { fill: "#e5f4f2", stroke: "#22867d", text: "#123f3a" },
		open: { fill: "#fceceb", stroke: "#c0453f", text: "#5f1815" },
		hypothesis: { fill: "#fbf1e2", stroke: "#b07419", text: "#57360a" },
		personal: { fill: "#f2ebfb", stroke: "#7040b0", text: "#361859" },
		planned: { fill: "#faf3dc", stroke: "#9a801a", text: "#453807" },
		line: "#c4c4c4",
	},
};

export function getPalette(mode) {
	return PALETTES[mode] || PALETTES.dark;
}

export function getMermaidConfig(mode) {
	const palette = getPalette(mode);

	return {
		startOnLoad: false,
		securityLevel: "loose",
		theme: "base",
		fontFamily: "var(--font-sans)",
		themeVariables: {
			background: "transparent",
			fontFamily: "var(--font-sans)",
			fontSize: "14px",
			lineColor: palette.line,
			primaryColor: palette.group.fill,
			primaryBorderColor: palette.group.stroke,
			primaryTextColor: palette.group.text,
		},
		flowchart: {
			curve: "basis",
			htmlLabels: true,
			padding: 10,
			nodeSpacing: 34,
			rankSpacing: 78,
			useMaxWidth: false,
			wrappingWidth: 220,
		},
	};
}

/** Mermaid chokes on raw quotes inside quoted labels. Nothing else needs it. */
function esc(text) {
	return String(text).replace(/"/g, "'");
}

function classDefs(mode) {
	const palette = getPalette(mode);
	const keys = ["root", "group", ...STATUS_ORDER];

	return keys.map((key) => {
		const { fill, stroke, text } = palette[key];
		return `  classDef ${key} fill:${fill},stroke:${stroke},stroke-width:1.25px,color:${text}`;
	});
}

function nodeLine(id, label, status) {
	const [open, close] = status === "group" ? ["[", "]"] : ["(", ")"];
	return `  ${id}${open}"${esc(label)}"${close}:::${status}`;
}

/** One domain of the map: the branch header plus everything hanging off it. */
export function buildBranchChart(branch, mode) {
	const lines = ["flowchart LR"];

	lines.push(nodeLine(branch.id, branch.label, "group"));
	for (const node of branch.nodes) {
		lines.push(nodeLine(node.id, node.label, node.status));
	}
	for (const node of branch.nodes) {
		lines.push(`  ${node.parent || branch.id} --> ${node.id}`);
	}
	lines.push(...classDefs(mode));

	return lines.join("\n");
}

/** The whole map at one level of depth, with per-domain counts. */
export function buildOverviewChart(mode) {
	const lines = ["flowchart LR", `  root(("${esc(MAP_ROOT)}")):::root`];

	for (const branch of BRANCHES) {
		const { total, counts } = countStatuses(branch);
		const meta = `${total} nodes &middot; ${counts.open} open`;
		lines.push(
			`  ${branch.id}["${esc(branch.label)}<br/><small>${meta}</small>"]:::group`
		);
		lines.push(`  root --> ${branch.id}`);
	}
	lines.push(...classDefs(mode));

	return lines.join("\n");
}
