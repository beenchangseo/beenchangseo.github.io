'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Mdx} from '../../../../../components/Mdx';
import {useFetchPost} from '../../../../../hooks/useFetchPost';
import {useRecoilValue} from 'recoil';
import {categoryState} from '../../../../../state/categoryState';

export default function PostPage({params}: {params: {slug: string}}) {
    const {post, loading, error} = useFetchPost(params.slug);
    const categories = useRecoilValue(categoryState);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const categoryButtonStyle =
        'h-8 px-3 m-1 text-xs border-2 border-gray-700 dark:border-gray-300 transition-colors duration-150 rounded-lg cursor-pointer focus:shadow-outline hover:bg-gray-300';

    return (
        <>
            <section>
                <div className="mt-10 pb-10 border-b-2 mb-10 prose dark:prose-invert">
                    <h1 className="mb-8 font-bold text-2xl sm:text-4xl font-mono">{post.title}</h1>
                    <div className="flex-auto mb-4">
                        {post.categories.map((item, index) => {
                            const category = categories.find(
                                (category) => category.keyword === item,
                            );
                            return (
                                <button className={categoryButtonStyle} key={index}>
                                    <Link href={{pathname: '/category', query: {category: item}}}>
                                        {category ? category.title : item}
                                    </Link>
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-between mb-16">
                        <span className="text-sm">
                            <a href="https://beenchangseo.github.io/">beenchangseo</a>
                        </span>
                        <span className="ml-1 mr-1">·</span>
                        <span className="text-sm font-medium text-gray-500">
                            {formatDate(post.update_time.toString())}
                        </span>
                        <span className="flex items-center ml-auto">
                            <a href="https://hits.seeyoufarm.com">
                                <Image
                                    className="mb-0 mt-0"
                                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fbeenchangseo.github.io&count_bg=%234B4B4B&title_bg=%23929292&icon=tencentqq.svg&icon_color=%23E7E7E7&title=TODAY&edge_flat=false"
                                    alt="Landscape picture"
                                    width={130}
                                    height={20}
                                />
                            </a>
                        </span>
                    </div>
                    <Mdx markdown={post.contents} />
                </div>
            </section>
        </>
    );
}
