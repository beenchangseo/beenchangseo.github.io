'use client';

import {useEffect} from 'react';
import {useSearchParams} from 'next/navigation';
import {signIn} from '../../lib/auth';

export default function LoginPage() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/admin';

    useEffect(() => {
        signIn('beens-oauth', {callbackUrl});
    }, [callbackUrl]);

    return (
        <div>
            <p>로그인 페이지로 리디렉션 중입니다...</p>
        </div>
    );
}
