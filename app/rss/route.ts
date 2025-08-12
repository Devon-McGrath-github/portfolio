import {baseUrl} from 'app/sitemap'

export function GET() {
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Devon McGraths Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
