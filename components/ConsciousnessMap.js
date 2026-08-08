"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@components/motion/Reveal";
import TextReveal from "@components/motion/TextReveal";
import MermaidDiagram from "@components/MermaidDiagram";
import { useTheme } from "@context/ThemeProvider";
import {
	BRANCHES,
	STATUS_META,
	STATUS_ORDER,
	countStatuses,
} from "@constants/consciousnessMap";
import { buildBranchChart, buildOverviewChart } from "@/lib/consciousnessChart";
import styles from "@styles/Artifacts.module.css";

const OVERVIEW = "overview";
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 2.4;
const ZOOM_STEP = 0.2;
/** Below this the node labels stop being worth reading. */
const LEGIBLE = 0.7;

const SIGNAL_GROUPS = [
	{ status: "open", title: "Open threads" },
	{ status: "resolved", title: "Resolutions" },
	{ status: "planned", title: "Queued to write" },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/** Mermaid node ids look like `artifact-graph-3-flowchart-physics-7`. */
function branchIdFromTarget(target) {
	const node = target?.closest?.("g.node");
	const id = node?.id.match(/-flowchart-(.+)-\d+$/)?.[1];
	return id && BRANCHES.some((branch) => branch.id === id) ? id : null;
}

export default function ConsciousnessMap() {
	const { mode } = useTheme();
	const shouldReduceMotion = useReducedMotion();

	const [activeId, setActiveId] = useState(OVERVIEW);
	const [zoom, setZoom] = useState(1);
	const [expanded, setExpanded] = useState(false);
	const [sourceOpen, setSourceOpen] = useState(false);
	const [copied, setCopied] = useState(false);

	const viewportRef = useRef(null);
	const naturalRef = useRef({ width: 0, height: 0 });

	const activeBranch = useMemo(
		() => BRANCHES.find((branch) => branch.id === activeId) || null,
		[activeId]
	);

	const chart = useMemo(
		() =>
			activeBranch
				? buildBranchChart(activeBranch, mode)
				: buildOverviewChart(mode),
		[activeBranch, mode]
	);

	const totals = useMemo(() => countStatuses(BRANCHES), []);
	const branchTotals = useMemo(
		() => (activeBranch ? countStatuses(activeBranch) : totals),
		[activeBranch, totals]
	);

	/* Overview surfaces every open thread in the map; a domain surfaces its own. */
	const signals = useMemo(() => {
		const scope = activeBranch ? [activeBranch] : BRANCHES;

		return SIGNAL_GROUPS.map((group) => ({
			...group,
			items: scope.flatMap((branch) =>
				branch.nodes
					.filter((node) => node.status === group.status)
					.map((node) => ({
						id: node.id,
						label: node.label,
						domain: activeBranch ? null : branch.short,
					}))
			),
		})).filter((group) => group.items.length > 0);
	}, [activeBranch]);

	/* Scale the freshly measured diagram down to whatever room the page has. */
	const fitToViewport = useCallback(() => {
		const viewport = viewportRef.current;
		const { width, height } = naturalRef.current;
		if (!viewport || !width) return;

		const byWidth = Math.min(1, (viewport.clientWidth - 32) / width);
		const byBoth = height
			? Math.min(byWidth, (viewport.clientHeight - 32) / height)
			: byWidth;

		// Show the whole diagram when that still leaves the labels readable.
		// Otherwise fit the width and let the reader walk down the tree. Never
		// shrink past legibility, even on a phone; pan covers the rest.
		const fit = byBoth >= LEGIBLE ? byBoth : byWidth;
		setZoom(clamp(Math.max(fit, LEGIBLE), ZOOM_MIN, ZOOM_MAX));
	}, []);

	const handleMeasure = useCallback(
		(size) => {
			naturalRef.current = size;
			fitToViewport();
		},
		[fitToViewport]
	);

	useEffect(() => {
		const onResize = () => fitToViewport();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [fitToViewport]);

	useEffect(() => {
		if (!expanded) return;

		const onKeyDown = (event) => {
			if (event.key === "Escape") setExpanded(false);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [expanded]);

	useEffect(() => {
		const frame = requestAnimationFrame(fitToViewport);
		return () => cancelAnimationFrame(frame);
	}, [expanded, fitToViewport]);

	useEffect(() => {
		if (!copied) return;
		const timer = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timer);
	}, [copied]);

	/* Drag-to-pan on top of native overflow scrolling, which handles touch. */
	const dragRef = useRef(null);
	const draggedRef = useRef(false);
	const hitRef = useRef(null);

	const onPointerDown = (event) => {
		// Pointer capture retargets the later click, so read the hit up front.
		hitRef.current = branchIdFromTarget(event.target);

		const viewport = viewportRef.current;
		if (!viewport || event.pointerType === "touch") return;

		draggedRef.current = false;
		dragRef.current = {
			x: event.clientX,
			y: event.clientY,
			left: viewport.scrollLeft,
			top: viewport.scrollTop,
		};
		viewport.setPointerCapture(event.pointerId);
	};

	const onPointerMove = (event) => {
		const drag = dragRef.current;
		const viewport = viewportRef.current;
		if (!drag || !viewport) return;

		const dx = event.clientX - drag.x;
		const dy = event.clientY - drag.y;
		if (Math.abs(dx) + Math.abs(dy) > 4) draggedRef.current = true;

		viewport.scrollLeft = drag.left - dx;
		viewport.scrollTop = drag.top - dy;
	};

	const endDrag = (event) => {
		const viewport = viewportRef.current;
		if (dragRef.current && viewport?.hasPointerCapture?.(event.pointerId)) {
			viewport.releasePointerCapture(event.pointerId);
		}
		dragRef.current = null;
	};

	/* On the overview, a domain box is a way into that domain. */
	const onCanvasClick = (event) => {
		const id = hitRef.current || branchIdFromTarget(event.target);
		hitRef.current = null;

		if (activeBranch || draggedRef.current || !id) return;
		setActiveId(id);
	};

	const copySource = async () => {
		try {
			await navigator.clipboard.writeText(chart);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	};

	const tabs = [
		{ id: OVERVIEW, label: "Overview" },
		...BRANCHES.map((branch) => ({ id: branch.id, label: branch.short })),
	];

	const headline = activeBranch ? activeBranch.label : "The whole landscape";
	const blurb = activeBranch
		? activeBranch.summary
		: "Nine domains hanging off one question. Pick one to open it up.";

	return (
		<section className={styles.container}>
			<Reveal>
				<Link href="/artifacts" className={styles.eyebrowLink}>
					<span aria-hidden="true">&larr;</span> Artifacts
				</Link>
				<h1 className={styles.title}>
					<TextReveal text="The Consciousness Map" as="span" />
				</h1>
				<p className={styles.subtitle}>
					A working object rather than an essay: every claim I have
					chased on consciousness, tagged by where it actually stands.
					Green is checked and holding, red is where the work is stuck.
					It changes as the thinking moves.
				</p>
			</Reveal>

			<Reveal delay={0.08}>
				<dl className={styles.ledger}>
					<Stat label="Domains" value={BRANCHES.length} />
					<Stat label="Claims tracked" value={totals.total} />
					<Stat label="Open" value={totals.counts.open} accent="open" />
					<Stat
						label="Resolved"
						value={totals.counts.resolved}
						accent="resolved"
					/>
					<Stat
						label="Queued"
						value={totals.counts.planned}
						accent="planned"
					/>
				</dl>
			</Reveal>

			<Reveal delay={0.12}>
				<div className={styles.tabs} role="tablist" aria-label="Map domains">
					{tabs.map((tab) => {
						const isActive = tab.id === activeId;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								aria-selected={isActive}
								className={`${styles.tab} ${
									isActive
										? shouldReduceMotion
											? styles.tabActiveStatic
											: styles.tabActive
										: ""
								}`}
								onClick={() => setActiveId(tab.id)}
							>
								{isActive && !shouldReduceMotion && (
									<motion.span
										className={styles.tabHighlight}
										layoutId="artifactTabHighlight"
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 30,
										}}
									/>
								)}
								{tab.label}
							</button>
						);
					})}
				</div>
			</Reveal>

			<div
				className={`${styles.canvas} ${expanded ? styles.canvasExpanded : ""}`}
			>
				<div className={styles.canvasBar}>
					<div className={styles.canvasHeading}>
						<h2 className={styles.canvasTitle}>{headline}</h2>
						<p className={styles.canvasBlurb}>{blurb}</p>
					</div>
					<div className={styles.controls}>
						<button
							type="button"
							className={styles.control}
							onClick={() =>
								setZoom((z) =>
									clamp(z - ZOOM_STEP, ZOOM_MIN, ZOOM_MAX)
								)
							}
							aria-label="Zoom out"
						>
							&minus;
						</button>
						<span className={styles.zoomValue}>
							{Math.round(zoom * 100)}%
						</span>
						<button
							type="button"
							className={styles.control}
							onClick={() =>
								setZoom((z) =>
									clamp(z + ZOOM_STEP, ZOOM_MIN, ZOOM_MAX)
								)
							}
							aria-label="Zoom in"
						>
							+
						</button>
						<button
							type="button"
							className={styles.controlWide}
							onClick={fitToViewport}
						>
							Fit
						</button>
						<button
							type="button"
							className={styles.controlWide}
							onClick={() => setExpanded((value) => !value)}
						>
							{expanded ? "Close" : "Expand"}
						</button>
					</div>
				</div>

				<div
					ref={viewportRef}
					className={`${styles.viewport} ${
						activeBranch ? "" : styles.viewportDrillable
					}`}
					data-lenis-prevent
					onPointerDown={onPointerDown}
					onPointerMove={onPointerMove}
					onPointerUp={endDrag}
					onPointerCancel={endDrag}
					onClick={onCanvasClick}
				>
					<MermaidDiagram
						chart={chart}
						mode={mode}
						zoom={zoom}
						onMeasure={handleMeasure}
					/>
				</div>

				<p className={styles.canvasHint}>
					{activeBranch
						? "Drag to pan"
						: "Click a domain to open it"}{" "}
					&middot; {branchTotals.total} claims in view
				</p>
			</div>

			<Reveal>
				<div className={styles.legend}>
					{STATUS_ORDER.map((status) => (
						<div key={status} className={styles.legendItem}>
							<span
								className={styles.legendSwatch}
								data-status={status}
								aria-hidden="true"
							/>
							<div>
								<p className={styles.legendLabel}>
									{STATUS_META[status].label}
									<span className={styles.legendCount}>
										{branchTotals.counts[status]}
									</span>
								</p>
								<p className={styles.legendBlurb}>
									{STATUS_META[status].blurb}
								</p>
							</div>
						</div>
					))}
				</div>
			</Reveal>

			{signals.length > 0 && (
				<Reveal>
					<div className={styles.signals}>
						{signals.map((group) => (
							<div key={group.status} className={styles.signalGroup}>
								<h3 className={styles.signalTitle}>
									<span
										className={styles.legendSwatch}
										data-status={group.status}
										aria-hidden="true"
									/>
									{group.title}
									<span className={styles.signalCount}>
										{group.items.length}
									</span>
								</h3>
								<ul className={styles.signalList}>
									{group.items.map((item) => (
										<li
											key={item.id}
											className={styles.signalItem}
										>
											{item.domain && (
												<span
													className={
														styles.signalDomain
													}
												>
													{item.domain}
												</span>
											)}
											{item.label}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Reveal>
			)}

			<Reveal>
				<div className={styles.source}>
					<div className={styles.sourceBar}>
						<button
							type="button"
							className={styles.sourceToggle}
							onClick={() => setSourceOpen((value) => !value)}
							aria-expanded={sourceOpen}
						>
							<span
								className={`${styles.sourceChevron} ${
									sourceOpen ? styles.sourceChevronOpen : ""
								}`}
								aria-hidden="true"
							>
								&rsaquo;
							</span>
							Mermaid source
						</button>
						<button
							type="button"
							className={styles.controlWide}
							onClick={copySource}
						>
							{copied ? "Copied" : "Copy"}
						</button>
					</div>
					{sourceOpen && (
						<pre className={styles.sourceCode}>
							<code>{chart}</code>
						</pre>
					)}
				</div>
			</Reveal>

			<div className={styles.backLinkContainer}>
				<Link href="/artifacts" className={styles.backLink}>
					<span aria-hidden="true">&larr;</span> Back to all artifacts
				</Link>
			</div>
		</section>
	);
}

function Stat({ label, value, accent }) {
	return (
		<div className={styles.stat} data-accent={accent || undefined}>
			<dt className={styles.statLabel}>{label}</dt>
			<dd className={styles.statValue}>{value}</dd>
		</div>
	);
}
