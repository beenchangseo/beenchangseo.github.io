import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from '../components/mode/Provider';
import Layout from '../components/Layout';
import {BASE_URL} from './sitemap.xml/route';
import {Suspense} from 'react';

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning={true}>
            <body>
                <Providers>
                    <Suspense>
                        <Layout>{children}</Layout>
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
