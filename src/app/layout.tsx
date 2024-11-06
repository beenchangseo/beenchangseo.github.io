import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import ThemaProvider from '../components/mode/ThemaProvider';
import {Suspense} from 'react';
import {AuthProvider} from '../context/authProvider';
import {BASE_URL} from '../types/constants';
import CategoryProvider from '../components/category/CategoryProvider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Beenchangseo Blog',
    description: 'Beenchangseo Blog',
    openGraph: {
        title: 'Beenchangseo Blog',
        description: 'Beenchangseo Blog',
        url: new URL(BASE_URL),
        locale: 'ko_KR',
        siteName: 'Beenchangseo Blog',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning={true}>
            <body>
                {/* Auth.js */}
                <AuthProvider>
                    {/* 다크/라이트모드 */}
                    <ThemaProvider>
                        {/* 카테고리 리스트를 전역으로 호출 하기 위한 클라이언트 전용 컴포넌트 */}
                        <CategoryProvider>
                            <Suspense>{children}</Suspense>
                        </CategoryProvider>
                    </ThemaProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
