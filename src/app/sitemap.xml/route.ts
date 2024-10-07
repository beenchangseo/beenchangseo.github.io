import {allPosts} from 'contentlayer/generated';

export const BASE_URL = 'https://blog.beenslab.com/';

function getSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${allPosts
          .map(
              (post) => `
              <url>
                <loc>${BASE_URL + 'blog/post/' + post._raw.flattenedPath}</loc>
                <lastmod>${new Date(post.date).toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>1</priority>
              </url>
            `,
          )
          .join('')}
      </urlset>
    `;
}

export async function GET() {
    return new Response(getSitemap(), {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
}
