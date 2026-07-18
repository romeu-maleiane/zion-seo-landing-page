export default function BlogTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<link rel="stylesheet" href="/blog-article-spacing.css" /></>
}
