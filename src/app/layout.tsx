import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Providers from '../components/mode/Provider';
import {BASE_URL} from './sitemap.xml/route';
import {Suspense} from 'react';
import {AuthProvider} from '../context/authProvider';

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
                <AuthProvider>
                    <Providers>
                        <Suspense>{children}</Suspense>
                    </Providers>
                </AuthProvider>
            </body>
        </html>
    );
}
