"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import Reveal from "@components/motion/Reveal";
import styles from "@styles/Article.module.css";

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
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<a
					href={value.href}
					rel={rel}
					target="_blank"
					className={styles.ptLink}
				>
					{children}
				</a>
			);
		},
	},
};
