import '../globals.css';
import Layout from '../../components/Layout';


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Layout>{children}</Layout>;
}
