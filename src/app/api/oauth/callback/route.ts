import axios from 'axios';
import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';

type GetTokenAPIResponse = {
    access_token: string;
    refresh_token: string;
    token_type: 'Bearer';
    expires_in: number;
    scope: string;
};

export async function GET(request: Request) {
    const origin = new URL(request.url).origin;

    // 요청 URL에서 쿼리 파라미터 추출
    const {searchParams} = new URL(request.url);
    console.log(searchParams);

    const clientId = searchParams.get('client_id') || '';
    const scope = searchParams.get('scope');
    const responseType = searchParams.get('response_type');
    const state = searchParams.get('state');
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.redirect(`${origin}/`);
    }

    const clientSecret = process.env.OAUTH_CLIENT_SECRET_ID || '';
    const redirectUrl = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL || '';
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const tokenResponse = await axios.post(
            process.env.OAUTH_TOKEN_URL || '',
            {
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                grant_type: 'authorization_code',
                redirect_uri: `${redirectUrl}?client_id=${clientId}&scope=${scope}&response_type=${responseType}&state=${state}`,
                state,
            },
            {
                headers: {
                    Authorization: `Basic ${credentials}`,
                },
                withCredentials: true,
            },
        );

        const tokenData: GetTokenAPIResponse = await tokenResponse.data;
        console.log(tokenData);

        const {access_token, refresh_token, expires_in} = tokenData;

        const response = NextResponse.redirect(`${origin}/admin`);

        // 액세스 토큰 쿠키 설정
        cookies().set('accessToken', access_token, {
            httpOnly: true,
            secure: process.env.MODE === 'production',
            maxAge: expires_in, // 토큰 만료 시간 (초 단위)
            path: '/',
        });

        console.log('x-session-expired: ', tokenResponse.headers['x-session-expired']);

        // 리프레시 토큰 쿠키 설정
        cookies().set('refreshToken', refresh_token, {
            httpOnly: true,
            secure: process.env.MODE === 'production',
            maxAge: expires_in, // 토큰 만료 시간 (초 단위)
            path: '/',
        });
        
        response.cookies.set('refreshToken', refresh_token, {
            httpOnly: true,
            secure: process.env.MODE === 'production',
            maxAge: tokenResponse.headers['x-session-expired'],
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Error exchanging code for tokens:', error);
        const origin = new URL(request.url).origin;
        return NextResponse.redirect(`${origin}/`);
    }
}
