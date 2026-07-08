export const siteConfig = {
	name: "Sarthak Karandikar",
	title: "Sarthak Karandikar",
	description:
		"Thoughts on technology, science, and philosophy, and where they might lead us on consciousness.",
	tagline:
		"Builder, independent researcher, and writer at the intersection of technology, science, and philosophy.",
	author: "Sarthak Karandikar",
	locale: "en_US",
	twitterHandle: "@_itsskofficial_",
	defaultOgImage: "/assets/images/header.jpg",
};

export function getSiteUrl() {
	const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
	if (fromEnv) return fromEnv.replace(/\/$/, "");
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return "http://localhost:3000";
}
