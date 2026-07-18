import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
})

export default withMDX(nextConfig)
