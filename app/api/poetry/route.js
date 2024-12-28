import { NextResponse } from "next/server";

export async function GET(request) {
	const poetries = [
		{
			id: 1,
			title: "Love Poem",
			category: "Love",
			images: ["/images/love1.jpg", "/images/love2.jpg"],
		},
		{
			id: 2,
			title: "Sadness",
			category: "Depression",
			images: ["/images/depression1.jpg"],
		},
		{
			id: 3,
			title: "Hope",
			category: "Motivation",
			images: [
				"/images/hope1.jpg",
				"/images/hope2.jpg",
				"/images/hope3.jpg",
			],
		},
	];

	return new NextResponse(JSON.stringify(poetries), {
		headers: { "Content-Type": "application/json" },
	});
}
