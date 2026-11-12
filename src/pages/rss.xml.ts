// RSS feed of the blog at /rss.xml. Tools such as Zapier, Make or Buffer can watch it and post new articles to LinkedIn.
import { posts } from '../data/posts';
import { isoDate } from '../data/dates';
const toDate = (d: string) => new Date((isoDate(d) + '-01').slice(0, 10) + 'T09:00:00Z').toUTCString();

const SITE = 'https://docifice.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = posts.map((p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${toDate(p.date)}</pubDate>
      <category>${esc(p.categoryLabel)}</category>
      <description>${esc(p.summary)}</description>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Docifice blog</title>
    <link>${SITE}/blog</link>
    <description>Guides and advice on technical documentation, from the people who write it.</description>
    <language>en</language>${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
