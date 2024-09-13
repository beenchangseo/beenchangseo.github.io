'use client';

import {FormEvent, useContext, useEffect, useState} from 'react';
import {auth} from '../../../firebase/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'next/navigation';
import {AuthContext} from '../../../context/authProvider';

export default function AdminLogin() {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!loading && user) {
            // 이미 로그인된 상태이므로 /admin으로 리디렉션
            router.replace('/admin');
        }
    }, [loading, user, router]);

    const login = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const credential = await signInWithEmailAndPassword(auth, email, password);

            router.push('/admin');
        } catch (error: any) {
            console.error('로그인 오류:', error.message);
            setError('Invalid id, password.');
        }
    };

    if (loading || user) {
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
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">로그인</h2>
                <form onSubmit={login}>
                    <input
                        type="text"
                        placeholder="아이디"
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
                    >
                        로그인
                    </button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        </>
    );
}
