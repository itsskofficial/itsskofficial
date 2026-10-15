export const siteConfig = {
	name: "Sarthak Karandikar",
	title: "Sarthak Karandikar",
	description:
		"Insights on technology, science, philosophy, and entrepreneurship.",
	tagline:
		"I share my insights on technology, science, philosophy, and entrepreneurship.",
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
