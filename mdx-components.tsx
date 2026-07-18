import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="mt-12 text-3xl font-semibold tracking-tight text-black/80">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-2xl font-semibold text-black/80">{children}</h3>,
    p: ({ children }) => <p className="mt-5 text-lg leading-8 text-black/65">{children}</p>,
    a: ({ href, children }) => href?.startsWith('/') ? <Link href={href} className="font-medium text-blue-600 underline underline-offset-4">{children}</Link> : <a href={href} className="font-medium text-blue-600 underline underline-offset-4" target="_blank" rel="noreferrer">{children}</a>,
    ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-black/65">{children}</ul>,
    ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-black/65">{children}</ol>,
    blockquote: ({ children }) => <blockquote className="mt-8 rounded-r-2xl border-l-4 border-blue-400 bg-blue-50 px-6 py-4 text-lg italic text-black/70">{children}</blockquote>,
    ...components,
  }
}
