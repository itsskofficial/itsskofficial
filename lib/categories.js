// Categories appear in the URL as ?category=technology. Shared by the blog
// filter, which reads the param, and by anything that links to a filtered view.
export const categorySlug = (category) =>
	category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const categoryHref = (category) =>
	`/blog?category=${categorySlug(category)}`;
