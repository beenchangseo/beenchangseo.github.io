import Head from 'next/head';
import {fetchAllPosts, fetchCategories} from '../../lib/api';
import CategoryFilter from '../../../components/category/CategoryFilter';

export default async function Category() {
    const posts = (await fetchAllPosts()).data;
    const categories = (await fetchCategories()).data;
    return (
        <>
            <Head>
                <meta property="og:title" content="Beenchang Seo Blog Main" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
                <meta property="og:url" content="https://beenchangseo.github.io/" />
            </Head>
            <CategoryFilter posts={posts} categories={categories} />
        </>
    );
}
