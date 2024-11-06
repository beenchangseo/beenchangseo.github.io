import {BASE_URL} from '../../types/constants';
import {GetAllPostResponse} from '../api/posts/route';

async function fetchAllPosts(): Promise<GetAllPostResponse[]> {
    const url = `${process.env.NEXTAUTH_URL}/api/posts`;
    const response = await fetch(url);
    const data = await response.json();

    return data.data;
}

async function getSitemap() {
    const allPosts = await fetchAllPosts();
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${allPosts
          .map(
              (post) => `
              <url>
                <loc>${BASE_URL + 'blog/post/' + post.id}</loc>
                <lastmod>${new Date(post.update_time).toISOString()}</lastmod>
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
    return new Response(await getSitemap(), {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
}
