import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getAllPosts, getPost } from '@/lib/blog'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article not found | Zion SEO' }

  return {
    title: `${post.frontmatter.title} | Zion SEO`,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  let MDXContent: React.ComponentType
  try {
    const module = await import(`../_posts/${post.slug}.mdx`)
    MDXContent = module.default
  } catch {
    notFound()
  }

  const faqSchema = post.frontmatter.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.frontmatter.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null

  return (
    <main className="min-h-screen bg-gray-30">
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <section className="px-5 pb-20 pt-32 md:pb-30 md:pt-40">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500"><ArrowLeft size={16} /> Back to articles</Link>
          <header className="mt-10 border-b border-black/10 pb-10">
            <div className="flex flex-wrap gap-4 text-sm text-black/55"><span className="flex items-center gap-1.5"><CalendarDays size={16} /> {post.frontmatter.date}</span><span className="flex items-center gap-1.5"><Clock3 size={16} /> {post.readingTime}</span></div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black/80 md:text-6xl">{post.frontmatter.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-black/60 md:text-xl">{post.frontmatter.description}</p>
          </header>
          <div className="zion-prose mt-10"><MDXContent /></div>
        </article>
      </section>
      <section className="flex-x-center pb-20 md:pb-30"><div className="personalized-conteiner feature-bg rounded-3xl px-6 py-12 text-center text-white shadow-sm md:px-12 md:py-16"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">Ready to put it into practice?</p><h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">Grow your store&apos;s visibility with AI-powered SEO.</h2><div className="mt-7 flex justify-center"><Button variant={'secondary'} size={'lg'}>Start now</Button></div></div></section>
      <Footer />
    </main>
  )
}
import { Button } from '@/components/ui/button'
