import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import BlogBackdrop from '@/components/blogBackdrop'

const articles = [
  { category: 'AI Search', title: 'How to make your ecommerce store visible in AI search', excerpt: 'A practical introduction to preparing product content for the next generation of discovery.', readTime: '6 min read', visual: 'from-blue-500 via-cyan-300 to-green-300' },
  { category: 'SEO Strategy', title: 'A better product-page SEO checklist for growing stores', excerpt: 'The on-page signals that help customers and search engines understand what you sell.', readTime: '8 min read', visual: 'from-green-500 via-emerald-300 to-sky-300' },
  { category: 'Content', title: 'Write product descriptions that rank and convert', excerpt: 'Use clear benefits, useful detail, and search intent to turn product copy into a growth channel.', readTime: '5 min read', visual: 'from-violet-500 via-blue-400 to-cyan-200' },
]

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-30">
      <BlogBackdrop />
      <Navbar />
      <section className="relative z-10 flex-x-center pt-44 pb-24 md:pt-52 md:pb-32">
        <div className="personalized-conteiner text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Zion SEO blog</p>
          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.08] text-black/80 md:text-7xl">Smarter ideas for growing your store&apos;s visibility</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/65 md:text-xl">Practical SEO, AI-search, and ecommerce growth guides for teams that want to be found wherever customers search.</p>
        </div>
      </section>
      <section className="relative z-10 flex-x-center pb-20 md:pb-30">
        <div className="personalized-conteiner">
          <div className="mb-8 flex items-end justify-between gap-5 md:mb-10">
            <div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Latest stories</p><h2 className="mt-2 text-3xl font-semibold text-black/80 md:text-5xl">Learn what moves search forward</h2></div>
            <Link href="#articles" className="hidden items-center gap-1 text-lg font-medium text-blue-600 hover:text-blue-500 md:flex">View all <ArrowRight size={19} /></Link>
          </div>
          <div id="articles" className="grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <article key={article.title} className="group flex min-h-[27rem] flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className={`relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${article.visual}`}><div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[22px] border-white/35" /><div className="absolute bottom-5 left-5 h-16 w-32 -skew-y-12 rounded-xl bg-white/35" /><span className="absolute right-5 top-5 text-6xl font-bold text-white/45">0{index + 1}</span></div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-6"><p className="text-sm font-semibold text-blue-600">{article.category}</p><h3 className="mt-3 text-2xl font-semibold leading-tight text-black/80">{article.title}</h3><p className="mt-3 text-black/60">{article.excerpt}</p><div className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-black/50"><span className="flex items-center gap-1.5"><Clock3 size={16} /> {article.readTime}</span><Link href="#" aria-label={`Read ${article.title}`} className="flex items-center gap-1 text-blue-600 transition-transform group-hover:translate-x-1">Read article <ArrowRight size={16} /></Link></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative z-10 flex-x-center pb-20 md:pb-30"><div className="personalized-conteiner rounded-3xl bg-white px-6 py-12 text-center shadow-sm md:px-12 md:py-16"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Ready to put it into practice?</p><h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-black/80 md:text-5xl">Grow your store&apos;s visibility with AI-powered SEO.</h2><Link href="/" className="mt-7 inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-400 px-6 text-lg font-medium text-white transition-opacity hover:opacity-80">Start for free</Link></div></section>
      <Footer />
    </main>
  )
}
