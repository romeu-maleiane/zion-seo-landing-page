import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type FaqItem = { question: string; answer: string }

export type BlogFrontmatter = {
  title: string
  description: string
  slug?: string
  date: string
  keyword?: string
  faq?: FaqItem[]
}

export type BlogPost = {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
  readingTime: string
}

export const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'app', 'blog', '_posts')

function readingTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 225))} min read`
}

function asDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return typeof value === 'string' ? value : ''
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, '')
  const source = fs.readFileSync(path.join(POSTS_DIRECTORY, filename), 'utf8')
  const { data, content } = matter(source)

  return {
    slug,
    frontmatter: {
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      slug: typeof data.slug === 'string' ? data.slug : slug,
      date: asDate(data.date),
      keyword: typeof data.keyword === 'string' ? data.keyword : undefined,
      faq: Array.isArray(data.faq) ? data.faq.filter((item): item is FaqItem => typeof item?.question === 'string' && typeof item?.answer === 'string') : undefined,
    },
    content,
    readingTime: readingTime(content),
  }
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIRECTORY)) return []

  return fs.readdirSync(POSTS_DIRECTORY)
    .filter((filename) => filename.endsWith('.mdx'))
    .map(readPost)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

export function getPost(slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null
  const filename = `${slug}.mdx`
  if (!fs.existsSync(path.join(POSTS_DIRECTORY, filename))) return null
  return readPost(filename)
}
