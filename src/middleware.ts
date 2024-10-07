import {NextRequest, NextResponse} from 'next/server';
import {auth} from './app/lib/auth';

export async function middleware(request: NextRequest) {
    const session = await auth();
    if (!session) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
}

// 미들웨어를 적용할 라우터 -> 로그인을 해야만 접근할 수 있는 곳
export const config = {
    matcher: ['/admin'],
};
