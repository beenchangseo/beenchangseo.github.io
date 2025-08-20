import Head from 'next/head';
import {fetchAllPosts} from '../../lib/api';
import BlogSearch from '../../../components/BlogSearch';

export default async function Blog() {
    const posts = (await fetchAllPosts()).data;
    return (
        <>
            <Head>
                <meta property="og:title" content="Beenchang Seo Blog Main" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
                <meta property="og:url" content="https://blog.beenslab.com/" />
            </Head>
            <BlogSearch posts={posts} />
        </>
    );
}
