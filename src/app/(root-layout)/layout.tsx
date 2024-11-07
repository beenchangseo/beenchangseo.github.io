import '../globals.css';
import Layout from '../../components/layout/Layout';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Layout>{children}</Layout>;
}
