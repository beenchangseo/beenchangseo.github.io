// src/app/robots.txt/route.ts
import {BASE_URL} from '../../types/constants';
import {NextResponse} from 'next/server';

export function GET() {
    return new NextResponse(
        `
        User-agent: *
        Allow: /
        Disallow: /_next/static/chunks/app/
        Sitemap: ${BASE_URL}sitemap.xml
        `,
        {
            headers: {
                'Content-Type': 'text/plain',
            },
        },
    );
}
