import { getSiteUrl } from "@/lib/site";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/studio", "/studio/"],
			},
		],
		sitemap: `${getSiteUrl()}/sitemap.xml`,
	};
}
