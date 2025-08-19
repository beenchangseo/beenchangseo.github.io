import type {MetadataRoute} from 'next';
import {fetchAllPosts} from './lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = 'https://blog.beenslab.com';
    const posts = (await fetchAllPosts()).data;

    const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
        url: `${base}/blog/post/${p.slug}`,
        lastModified: new Date(p.update_time),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {url: `${base}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0},
        {url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9},
        {url: `${base}/category`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9},
        {url: `${base}/career`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9},
        ...postUrls,
    ];
}
