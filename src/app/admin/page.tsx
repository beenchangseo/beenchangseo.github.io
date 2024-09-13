'use client';

import {useContext, useEffect} from 'react';
import {AuthContext} from '../../context/authProvider';
import {useRouter} from 'next/navigation';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase/firebase';

export default function Admin() {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/admin/login');
        }
    }, [loading, user, router]);

    const handleLogout = async (): Promise<void> => {
        try {
            await signOut(auth);
            router.push('/admin/login');
        } catch (error) {
            console.error('로그아웃 오류:', (error as Error).message);
        }
    };

    if (loading || !user) {
        return (
            <>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800"></div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="max-w-sm mx-auto mt-24 p-6 bg-white border border-gray-300 shadow-md">
                <h1>관리자 페이지</h1>
                <p>안녕하세요, {user.email}님!</p>
                <button onClick={handleLogout}>로그아웃</button>
                {/* 관리자용 콘텐츠 추가 */}
            </div>
        </>
    );
}
