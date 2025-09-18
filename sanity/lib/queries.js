import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  summary,
  "mainImage": mainImage,
  "authorName": author->name,
  publishedAt,
  "categories": categories[]->title
`;

export const postsQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`;

export const latestPostsQuery = groq`
*[_type == "post"] | order(publishedAt desc) [0...3] {
  ${postFields}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  "authorName": author->name,
  "categories": categories[]->title,
  body
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;