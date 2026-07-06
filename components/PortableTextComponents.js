"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import Reveal from "@components/motion/Reveal";
import styles from "@styles/Article.module.css";

function renderFootnoteText(text) {
	if (!text) return null;
	const parts = [];
	let remaining = text;
	let index = 0;

	while (remaining.length > 0) {
		const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
		if (linkMatch) {
			const href = linkMatch[2];
			const isExternal = href.startsWith("http");
			parts.push(
				<a
					key={`fn-link-${index++}`}
					href={href}
					className={styles.ptLink}
					rel={isExternal ? "noreferrer noopener" : undefined}
					target={isExternal ? "_blank" : undefined}
				>
					{linkMatch[1]}
				</a>
			);
			remaining = remaining.slice(linkMatch[0].length);
			continue;
		}

		const nextLink = remaining.search(/\[([^\]]+)\]\(([^)]+)\)/);
		const end = nextLink === -1 ? remaining.length : nextLink;
		const plain = remaining.slice(0, end);
		if (plain) parts.push(plain);
		remaining = remaining.slice(end);
	}

	return parts;
}

const bwCodeTheme = {
	"hljs": {
		display: "block",
		overflowX: "auto",
		padding: "1.5em",
		background: "var(--bg-subtle)",
		color: "var(--text)",
		border: "1px solid var(--border)",
		borderBottomLeftRadius: "var(--radius-md)",
		borderBottomRightRadius: "var(--radius-md)",
	},
	"hljs-comment": { color: "var(--text-faint)", fontStyle: "italic" },
	"hljs-quote": { color: "var(--text-faint)", fontStyle: "italic" },
	"hljs-keyword": { color: "var(--heading-color)", fontWeight: "600" },
	"hljs-selector-tag": { color: "var(--heading-color)", fontWeight: "600" },
	"hljs-string": { color: "var(--text-muted)" },
	"hljs-number": { color: "var(--text-muted)" },
	"hljs-title": { color: "var(--heading-color)" },
	"hljs-function": { color: "var(--heading-color)" },
	"hljs-built_in": { color: "var(--text-muted)" },
	"hljs-type": { color: "var(--heading-color)" },
	"hljs-attr": { color: "var(--text)" },
	"hljs-variable": { color: "var(--text)" },
	"hljs-params": { color: "var(--text)" },
};

export const PortableTextComponents = {
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) {
				return null;
			}
			return (
				<Reveal>
					<figure className={styles.ptImage}>
						<Image
							src={urlFor(value)
								.width(1000)
								.fit("max")
								.auto("format")
								.url()}
							width={1000}
							height={600}
							alt={value.alt || " "}
							loading="lazy"
							style={{
								width: "100%",
								height: "auto",
								filter: "grayscale(100%)",
							}}
						/>
						{value.caption && (
							<figcaption className={styles.ptCaption}>
								{value.caption}
							</figcaption>
						)}
					</figure>
				</Reveal>
			);
		},
		codeBlock: ({ value }) => {
			const { code, language, filename } = value;
			return (
				<div className={styles.ptCodeBlock}>
					{filename && (
						<div className={styles.ptCodeFilename}>{filename}</div>
					)}
					<SyntaxHighlighter
						language={language || "text"}
						style={bwCodeTheme}
						customStyle={{
							padding: "1.5em",
							margin: 0,
							borderTopLeftRadius: filename ? 0 : "var(--radius-md)",
							borderTopRightRadius: filename ? 0 : "var(--radius-md)",
						}}
					>
						{code}
					</SyntaxHighlighter>
				</div>
			);
		},
		footnotes: ({ value }) => {
			if (!value?.items?.length) return null;
			return (
				<aside className={styles.ptFootnotes}>
					<h4 className={styles.ptFootnotesTitle}>Footnotes</h4>
					<ol className={styles.ptFootnotesList}>
						{value.items.map((item) => (
							<li
								key={item._key || item.number}
								id={`footnote-${item.number}`}
								className={styles.ptFootnoteItem}
							>
								<sup className={styles.ptFootnoteNum}>{item.number}</sup>
								<span>{renderFootnoteText(item.text)}</span>
							</li>
						))}
					</ol>
				</aside>
			);
		},
	},
	block: {
		h2: ({ children }) => (
			<h2 style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>{children}</h2>
		),
		h3: ({ children }) => (
			<h3 style={{ marginTop: "1.5em", marginBottom: "0.5em" }}>{children}</h3>
		),
		blockquote: ({ children }) => (
			<blockquote className={styles.ptBlockquote}>{children}</blockquote>
		),
	},
	marks: {
		link: ({ children, value }) => {
			const href = value?.href || "";
			const isExternal = href.startsWith("http");
			return (
				<a
					href={href}
					rel={isExternal ? "noreferrer noopener" : undefined}
					target={isExternal ? "_blank" : undefined}
					className={styles.ptLink}
				>
					{children}
				</a>
			);
		},
		footnote: ({ children, value }) => (
			<sup className={styles.ptFootnoteRef}>
				<a href={`#footnote-${value.number}`}>{children}</a>
			</sup>
		),
	},
};
