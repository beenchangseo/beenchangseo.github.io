import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import ThemeProvider from '../components/mode/ThemeProvider';
import {Suspense} from 'react';
import {AuthProvider} from '../context/authProvider';
import {BASE_URL} from '../types/constants';

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
                    <ThemeProvider>
                        <Suspense>{children}</Suspense>
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
