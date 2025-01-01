import {NextResponse} from 'next/server';

export async function GET() {
    try {
        // 백엔드에서 사이트맵 데이터 가져오기
        const response = await fetch(`${process.env.BACKEND_API_SERVER}/sitemap.xml`);
        const originalSitemap = await response.text();

        return new NextResponse(originalSitemap, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return new NextResponse('Error generating sitemap', {status: 500});
    }
}
