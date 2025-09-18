// Note: react-syntax-highlighter is a client component.
// To use it in a server component, you need to either add "use client" to this file
// or create a separate client component for the code block.
// For simplicity, let's make this whole component file a client component.
"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a style

export const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div style={{ margin: '2em 0' }}>
          <Image
            src={urlFor(value).width(1000).fit('max').auto('format').url()}
            width={1000}
            height={600}
            alt={value.alt || ' '}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 'var(--border-radius)',
            }}
          />
          {value.caption && <figcaption style={{ textAlign: 'center', color: 'var(--subtle-text-color)', fontSize: '0.9rem', marginTop: '0.5em' }}>{value.caption}</figcaption>}
        </div>
      );
    },
    codeBlock: ({ value }) => {
      const { code, language, filename } = value;
      return (
        <div style={{ margin: '2em 0' }}>
          {filename && <div style={{ backgroundColor: '#3a404d', color: '#f0f0f0', padding: '0.5em 1em', borderTopLeftRadius: 'var(--border-radius)', borderTopRightRadius: 'var(--border-radius)', fontSize: '0.9rem' }}>{filename}</div>}
          <SyntaxHighlighter language={language || 'text'} style={atomOneDark} customStyle={{ padding: '1.5em', borderBottomLeftRadius: 'var(--border-radius)', borderBottomRightRadius: 'var(--border-radius)', margin: 0 }}>
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>{children}</h3>,
    blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid var(--heading-color)', paddingLeft: '1em', margin: '1.5em 0', fontStyle: 'italic', color: 'var(--subtle-text-color)' }}>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} target="_blank" style={{ textDecoration: 'underline' }}>
          {children}
        </a>
      );
    },
  },
};