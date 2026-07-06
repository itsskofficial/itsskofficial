import { randomBytes } from "crypto";

const key = () => randomBytes(4).toString("hex");

export function stripEmDashes(text) {
	return text
		.replace(/\u2014/g, ", ")
		.replace(/\u2013/g, "-")
		.replace(/, ,/g, ",")
		.replace(/,\s+,/g, ", ");
}

export function normalizeFootnoteSyntax(text) {
	return text
		.replace(/\[\[(\d+)\]\]\(\1\)/g, "[^$1]")
		.replace(/\[\[(\d+)\]\]\(\1\):/g, "[^$1]:");
}

function parseInline(text, footnoteMap) {
	const children = [];
	const markDefs = [];
	let remaining = text;
	let childIndex = 0;

	const addMarkDef = (def) => {
		if (!markDefs.find((m) => m._key === def._key)) {
			markDefs.push(def);
		}
		return def._key;
	};

	while (remaining.length > 0) {
		const footnoteMatch = remaining.match(/^\[\^(\d+)\]/);
		const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
		const boldMatch = remaining.match(/^\*\*(.+?)\*\*/);
		const italicMatch = remaining.match(/^\*(.+?)\*/);
		const codeMatch = remaining.match(/^`(.+?)`/);

		if (footnoteMatch) {
			const num = footnoteMatch[1];
			const markKey = `fn-${num}`;
			addMarkDef({
				_key: markKey,
				_type: "footnote",
				number: num,
				text: footnoteMap[num] || "",
			});
			children.push({
				_type: "span",
				_key: `s${childIndex++}`,
				text: num,
				marks: [markKey],
			});
			remaining = remaining.slice(footnoteMatch[0].length);
		} else if (linkMatch) {
			const markKey = `link-${childIndex}`;
			const href = linkMatch[2];
			addMarkDef({
				_key: markKey,
				_type: "link",
				href,
			});
			children.push({
				_type: "span",
				_key: `s${childIndex++}`,
				text: linkMatch[1],
				marks: [markKey],
			});
			remaining = remaining.slice(linkMatch[0].length);
		} else if (boldMatch) {
			children.push({
				_type: "span",
				_key: `s${childIndex++}`,
				text: boldMatch[1],
				marks: ["strong"],
			});
			remaining = remaining.slice(boldMatch[0].length);
		} else if (italicMatch) {
			children.push({
				_type: "span",
				_key: `s${childIndex++}`,
				text: italicMatch[1],
				marks: ["em"],
			});
			remaining = remaining.slice(italicMatch[0].length);
		} else if (codeMatch) {
			children.push({
				_type: "span",
				_key: `s${childIndex++}`,
				text: codeMatch[1],
				marks: ["code"],
			});
			remaining = remaining.slice(codeMatch[0].length);
		} else {
			const nextSpecial = remaining.search(
				/\[\^\d+\]|\[([^\]]+)\]\(([^)]+)\)|\*\*|\*|`|$/
			);
			const end = nextSpecial === -1 ? remaining.length : nextSpecial;
			const plain = remaining.slice(0, end);
			if (plain) {
				children.push({
					_type: "span",
					_key: `s${childIndex++}`,
					text: plain,
					marks: [],
				});
			}
			remaining = remaining.slice(end);
		}
	}

	if (children.length === 0) {
		children.push({ _type: "span", _key: "s0", text: "", marks: [] });
	}

	return { children, markDefs };
}

function block(style, text, footnoteMap) {
	const cleaned = stripEmDashes(text.trim());
	const { children, markDefs } = parseInline(cleaned, footnoteMap);
	return {
		_type: "block",
		_key: key(),
		style,
		markDefs,
		children,
	};
}

function extractFootnotes(lines) {
	const footnoteMap = {};
	const bodyLines = [];

	for (const line of lines) {
		const trimmed = line.trim();
		const match =
			trimmed.match(/^\[\^(\d+)\]:\s*(.*)$/) ||
			trimmed.match(/^\[\[(\d+)\]\]\(\1\):\s*(.*)$/);

		if (match) {
			footnoteMap[match[1]] = stripEmDashes(match[2].trim());
			continue;
		}

		bodyLines.push(line);
	}

	return { footnoteMap, bodyLines };
}

export function markdownToPortableText(markdown) {
	const normalized = normalizeFootnoteSyntax(stripEmDashes(markdown));
	const rawLines = normalized.split("\n");
	const { footnoteMap, bodyLines } = extractFootnotes(rawLines);
	const blocks = [];
	let i = 0;

	while (i < bodyLines.length) {
		const line = bodyLines[i].trim();

		if (!line || line === "***" || line === "---") {
			i++;
			continue;
		}

		if (line.startsWith("# ")) {
			i++;
			continue;
		}

		if (line.startsWith("### Footnotes")) {
			i++;
			continue;
		}

		if (line.startsWith("## ")) {
			blocks.push(block("h2", line.slice(3), footnoteMap));
			i++;
			continue;
		}

		if (line.startsWith("### ")) {
			blocks.push(block("h3", line.slice(4), footnoteMap));
			i++;
			continue;
		}

		if (line.startsWith("#### ")) {
			blocks.push(block("h4", line.slice(5), footnoteMap));
			i++;
			continue;
		}

		blocks.push(block("normal", line, footnoteMap));
		i++;
	}

	const footnoteNumbers = Object.keys(footnoteMap).sort(
		(a, b) => Number(a) - Number(b)
	);

	if (footnoteNumbers.length > 0) {
		blocks.push({
			_type: "footnotes",
			_key: key(),
			items: footnoteNumbers.map((num) => ({
				_key: key(),
				number: num,
				text: footnoteMap[num],
			})),
		});
	}

	return blocks;
}

export function slugify(title) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

export function extractTitle(markdown) {
	const match = markdown.match(/^# (.+)$/m);
	if (!match) throw new Error("No title found");
	return stripEmDashes(match[1].trim());
}

export function extractSummary(
	bodyBlocks,
	fallback = "An essay on consciousness."
) {
	const firstPara = bodyBlocks.find(
		(b) =>
			b._type === "block" &&
			b.style === "normal" &&
			b.children[0]?.text?.length > 40
	);
	if (!firstPara) return fallback;
	let text = firstPara.children.map((c) => c.text).join("");
	text = text.replace(/\[\^\d+\]/g, "").trim();
	if (text.length > 200) {
		const cut = text.slice(0, 197);
		const lastSpace = cut.lastIndexOf(" ");
		return `${cut.slice(0, lastSpace)}...`;
	}
	return text;
}
