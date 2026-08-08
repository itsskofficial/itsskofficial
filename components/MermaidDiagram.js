"use client";

import { useEffect, useRef, useState } from "react";
import { getMermaidConfig } from "@/lib/consciousnessChart";
import styles from "@styles/Artifacts.module.css";

/** Mermaid is heavy and browser-only, so it is loaded once, lazily, on demand. */
let mermaidPromise = null;
function loadMermaid() {
	if (!mermaidPromise) {
		mermaidPromise = import("mermaid").then((mod) => mod.default);
	}
	return mermaidPromise;
}

let renderCounter = 0;

/**
 * Strip the width/height/max-width mermaid bakes into the root <svg> so the
 * wrapper can size it instead, and read the viewBox for the natural aspect.
 */
function normalizeSvg(markup) {
	const viewBox = markup.match(/viewBox="([-\d.]+) ([-\d.]+) ([-\d.]+) ([-\d.]+)"/);
	const width = viewBox ? Number(viewBox[3]) : 0;
	const height = viewBox ? Number(viewBox[4]) : 0;

	const svg = markup
		.replace(/(<svg[^>]*?)\s+width="[^"]*"/, "$1")
		.replace(/(<svg[^>]*?)\s+height="[^"]*"/, "$1")
		.replace(/(<svg[^>]*?)\s+style="[^"]*"/, "$1")
		.replace(
			/<svg\s/,
			'<svg width="100%" height="100%" preserveAspectRatio="xMinYMin meet" '
		);

	return { svg, width, height };
}

export default function MermaidDiagram({ chart, mode, zoom = 1, onMeasure }) {
	const [svg, setSvg] = useState("");
	const [error, setError] = useState(null);
	const [size, setSize] = useState({ width: 0, height: 0 });
	const measureRef = useRef(onMeasure);

	useEffect(() => {
		measureRef.current = onMeasure;
	});

	useEffect(() => {
		let cancelled = false;

		loadMermaid()
			.then(async (mermaid) => {
				mermaid.initialize(getMermaidConfig(mode));
				renderCounter += 1;
				const result = await mermaid.render(
					`artifact-graph-${renderCounter}`,
					chart
				);
				if (cancelled) return;

				const normalized = normalizeSvg(result.svg);
				setSvg(normalized.svg);
				setSize({ width: normalized.width, height: normalized.height });
				setError(null);
				measureRef.current?.({
					width: normalized.width,
					height: normalized.height,
				});
			})
			.catch((err) => {
				if (cancelled) return;
				setError(err?.message || "The diagram could not be drawn.");
			});

		return () => {
			cancelled = true;
		};
	}, [chart, mode]);

	if (error) {
		return <p className={styles.canvasMessage}>{error}</p>;
	}

	if (!svg) {
		return <p className={styles.canvasMessage}>Drawing the map&hellip;</p>;
	}

	return (
		<div
			className={styles.scaler}
			style={{
				width: size.width ? size.width * zoom : "100%",
				height: size.height ? size.height * zoom : "100%",
			}}
			dangerouslySetInnerHTML={{ __html: svg }}
		/>
	);
}
