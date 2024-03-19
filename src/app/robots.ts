import {MetadataRoute} from 'next';
import {BASE_URL} from './sitemap.xml/route';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: BASE_URL + 'sitemap.xml',
    };
}
