// components/PostBody.js
"use client";

import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./PortableTextComponents";

export default function PostBody({ body }) {
	return <PortableText value={body} components={PortableTextComponents} />;
}