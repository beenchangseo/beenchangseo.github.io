'use client';

import PostList2 from '../../../components/PostList2';
import Head from 'next/head';
import {ChangeEvent, useEffect, useState} from 'react';
import {GetAllPostResponse} from '../../api/posts/route';

export default function Blog() {
    const [posts, setPosts] = useState<GetAllPostResponse[]>([]);
    const [search, setSearch] = useState<string>('');

    // API에서 게시글 데이터 가져오기
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const data = (await res.json()).data;

            setPosts(data);
        };
        fetchPosts();
    }, []);

    // 검색 기능
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase());
    };

    return (
        <>
            <Head>
                <meta property="og:title" content="Beenchang Seo Blog Main" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
                <meta property="og:url" content="https://beenchangseo.github.io/" />
            </Head>
            <section className="mt-12 mb-8 flex flex-col gap-12">
                <h1 className="font-bold text-2xl sm:text-4xl font-mono">📝 Blog</h1>
                <div className="flex flex-nowrap gap-4 items-center px-4 w-full h-16 rounded-2xl border-2 border-black dark:border-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <input
                        type="text"
                        className="flex-1 outline-none bg-transparent appearance-none"
                        onChange={handleSearch}
                        placeholder="검색하기"
                    />
                </div>
            </section>
            <PostList2 posts={posts.filter((post) => post.title.toLowerCase().includes(search))} />
        </>
    );
}
