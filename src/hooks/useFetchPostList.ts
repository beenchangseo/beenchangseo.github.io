'use client';

import {useEffect, useState, ChangeEvent} from 'react';
import {GetAllPostResponse} from '../app/api/posts/route';
import {useSearchParams} from 'next/navigation';

const useFetchPostList = () => {
    const [posts, setPosts] = useState<GetAllPostResponse[]>([]);

    // API에서 게시글 데이터 가져오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                
                const data = (await res.json()).data;
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return posts;
};

const useSearchTextPost = (posts: GetAllPostResponse[]) => {
    console.log(posts);
    
    const [search, setSearch] = useState<string>('');

    // 검색 기능
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase());
    };

    // 검색 필터링
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search));

    return {posts: filteredPosts, handleSearch};
};

const useSearchCategoryPost = (posts: GetAllPostResponse[]) => {
    const params = useSearchParams();
    const [sellect, setSellect] = useState<string>(params.get('category') ?? '');

    // 검색 필터링
    if (sellect === '') {
        return {posts, sellect, setSellect};
    } else {
        const filteredPosts = posts.filter((post) => post.categories.includes(sellect));

        return {posts: filteredPosts, sellect, setSellect};
    }
};

export {useFetchPostList, useSearchTextPost, useSearchCategoryPost};
