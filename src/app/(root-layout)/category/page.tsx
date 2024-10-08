'use client';

import CategoryList from '../../../components/CategoryList';
import PostList from '../../../components/PostList';
import {allPosts} from 'contentlayer/generated';
import Head from 'next/head';
import {useSearchParams} from 'next/navigation';
import {useState} from 'react';

export default function Category() {
    const params = useSearchParams();

    const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    const [sellect, setSellect] = useState<string>(params.get('category') ?? '');

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
                <CategoryList sellect={sellect} setSellect={setSellect} />
            </section>
            {sellect === '' ? (
                <PostList posts={posts} />
            ) : (
                <PostList posts={posts.filter((post) => post.category.includes(sellect))} />
            )}
        </>
    );
}
