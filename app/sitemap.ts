export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default function sitemap() {
  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
