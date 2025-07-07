import {Mdx} from '../../../../../components/Mdx';
import {fetchPost, fetchAllPosts, fetchCategories} from '../../../../lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const posts = await fetchAllPosts();
    return posts.data.map((post: any) => ({slug: post.id}));
}

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
    const post = (await fetchPost(params.slug)).data;
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://beenchangseo.github.io/blog/post/${params.slug}`,
            type: 'article',
            // images: [post.ogImage || '/default-og.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            // images: [post.ogImage || '/default-og.png'],
        },
    };
}

export default async function PostPage({params}: {params: {slug: string}}) {
    const post = (await fetchPost(params.slug)).data;
    const categories = (await fetchCategories()).data;

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
                        {post.categories.map((item: string, index: number) => {
                            const category = categories.find(
                                (category: any) => category.keyword === item,
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
                            <a href="#">
                                <Image
                                    className="mb-0 mt-0"
                                    src="https://hits.beenslab.com/?domain=beenslab&post_id=1OCKAx8ts3oJamdb1ei5"
                                    alt="Hits"
                                    width={200}
                                    height={20}
                                    unoptimized
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
