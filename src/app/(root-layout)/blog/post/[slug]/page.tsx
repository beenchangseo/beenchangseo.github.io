import {Mdx} from '../../../../../components/Mdx';
import {fetchPost, fetchAllPosts, fetchCategories} from '../../../../lib/api';
import Link from 'next/link';
import Image from 'next/image';
import {Metadata} from 'next';
import Script from 'next/script';

export async function generateStaticParams() {
    const posts = await fetchAllPosts();
    return posts.data.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
    const post = (await fetchPost(params.slug)).data;
    const url = `https://blog.beenslab.com/blog/post/${params.slug}`;
    return {
        title: post.title,
        description: post.description,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            siteName: 'beenslab',
            description: post.description,
            url,
            type: 'article',
            images: ['/images/default-og.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: ['/images/default-og.png'],
        },
        alternates: {
            canonical: url,
        },
        robots: {index: true, follow: true},
    };
}

export default async function PostPage({params}: {params: {slug: string}}) {
    const post = (await fetchPost(params.slug)).data;
    const categories = (await fetchCategories()).data;

    // JSON-LD(TechArticle)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://blog.beenslab.com/blog/post/${params.slug}`,
        },
        headline: post.title,
        description: post.description,
        author: {'@type': 'Person', name: 'beenchangseo'},
        publisher: {'@type': 'Organization', name: 'beenslab'},
        datePublished: post.create_time,
        dateModified: post.update_time,
        image:'/images/default-og.png',
    };

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
            {/* JSON-LD 주입 */}
            <Script
                id="post-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
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
                                    <Link href={{pathname: '/category', query: {filter: item}}}>
                                        {category ? category.title : item}
                                    </Link>
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-between mb-16">
                        <span className="text-sm">
                            <a href="https://blog.beenslab.com/">beenchangseo</a>
                        </span>
                        <span className="ml-1 mr-1">·</span>
                        <span className="text-sm font-medium text-gray-500">
                            {formatDate(post.update_time.toString())}
                        </span>
                        <span className="flex items-center ml-auto">
                            <a href="#">
                                <Image
                                    className="mb-0 mt-0"
                                    src={`https://hits.beenslab.com/?domain=beenslab&post_id=1OCKAx8ts3oJamdb1ei5`}
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
