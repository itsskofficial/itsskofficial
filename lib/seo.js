import { getSiteUrl, siteConfig } from "./site";

export function absoluteUrl(path = "/") {
	const base = getSiteUrl();
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${base}${normalized}`;
}

export function createMetadata({
	title,
	description,
	path = "/",
	image,
	type = "website",
	publishedTime,
	modifiedTime,
	authors,
	tags,
	noIndex = false,
}) {
	const url = absoluteUrl(path);
	const ogImage = image || absoluteUrl(siteConfig.defaultOgImage);
	const pageTitle = title
		? title.includes(siteConfig.name)
			? title
			: `${title} | ${siteConfig.name}`
		: siteConfig.title;

	return {
		title: pageTitle,
		description: description || siteConfig.description,
		metadataBase: new URL(getSiteUrl()),
		alternates: {
			canonical: url,
		},
		robots: noIndex
			? { index: false, follow: false }
			: {
					index: true,
					follow: true,
					googleBot: { index: true, follow: true },
				},
		openGraph: {
			title: pageTitle,
			description: description || siteConfig.description,
			url,
			siteName: siteConfig.name,
			locale: siteConfig.locale,
			type,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: pageTitle,
				},
			],
			...(publishedTime ? { publishedTime } : {}),
			...(modifiedTime ? { modifiedTime } : {}),
			...(authors ? { authors } : {}),
			...(tags ? { tags } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: description || siteConfig.description,
			images: [ogImage],
			creator: siteConfig.twitterHandle,
		},
	};
}
