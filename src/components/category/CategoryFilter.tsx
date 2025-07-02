'use client';

import {useState} from 'react';
import CategoryList from './CategoryList';
import PostList from '../PostList';

export default function CategoryFilter({posts, categories}: {posts: any[]; categories: any[]}) {
    const [select, setSelect] = useState('');
    const filteredPosts =
        select === '' ? posts : posts.filter((post) => post.categories.includes(select));
    return (
        <>
            <section className="mt-12 mb-8 flex flex-col gap-12">
                <h1 className="font-bold text-2xl sm:text-4xl font-mono">🗂 Category</h1>
                <CategoryList select={select} setSelect={setSelect} categories={categories} />
            </section>
            <PostList posts={filteredPosts} />
        </>
    );
}
