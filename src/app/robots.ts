import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{userAgent: '*', allow: '/', disallow: ''}],
        sitemap: 'https://blog.beenslab.com/sitemap.xml',
    };
}
