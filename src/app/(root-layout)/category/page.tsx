'use client';

import CategoryList from '../../../components/category/CategoryList';
import PostList from '../../../components/PostList';
import Head from 'next/head';
import {useRecoilValue} from 'recoil';
import {categoryState} from '../../../state/categoryState';
import {useFetchPostList, useSearchCategoryPost} from '../../../hooks/useFetchPostList';

export default function Category() {
    const posts = useFetchPostList();
    const categories = useRecoilValue(categoryState);
    const {posts: sellectedPosts, sellect, setSellect} = useSearchCategoryPost(posts);

    return (
        <>
            <Head>
                <meta property="og:title" content="Beenchang Seo Blog Main" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
                <meta property="og:url" content="https://beenchangseo.github.io/" />
            </Head>
            <section className="mt-12 mb-8 flex flex-col gap-12">
                <h1 className="font-bold text-2xl sm:text-4xl font-mono">🗂 Category</h1>
                <CategoryList sellect={sellect} setSellect={setSellect} categories={categories} />
            </section>
            <PostList posts={sellectedPosts} />
        </>
    );
}
