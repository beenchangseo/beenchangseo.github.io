'use client'
import React from 'react';
import {signIn} from 'next-auth/react'; // auth.js의 signIn 함수 사용


const SignInPage: React.FC = () => {
    const handleOAuthSignIn = () => {
        signIn('beens-oauth', {redirectTo: '/admin'}); // Google OAuth 로그인을 예시로 사용
    };
    
    const handleOauthSignUp = () => {
        // TODO:: redirect oauth sign-up
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                    로그인
                </h1>

                <div className="mt-6">
                    <button
                        onClick={handleOAuthSignIn}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                        Beens 계정으로 로그인
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        계정이 없으신가요?{' '}
                        <a
                            href="/signup"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            회원가입
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
