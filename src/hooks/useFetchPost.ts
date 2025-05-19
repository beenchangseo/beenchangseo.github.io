'use client';

import {useEffect, useState} from 'react';
import {GetPostResponse} from '../app/api/posts/[id]/route';

const useFetchPost = (slug: string) => {
    const [post, setPost] = useState<GetPostResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/${slug}`, {
                    // cache: 'no-cache',
                });
                const data = await res.json();
                setPost(data.data);
            } catch (err) {
                setError('Failed to fetch post data');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return {post, loading, error};
};

export {useFetchPost};
