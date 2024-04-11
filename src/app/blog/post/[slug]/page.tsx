import {BASE_URL} from '../../../sitemap.xml/route';
import {Mdx} from '../../../../components/Mdx';
import {allPosts} from 'contentlayer/generated';
import {Metadata} from 'next';

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }));
}

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

    if (!post) {
        return {};
    }

    return {
        metadataBase: new URL(BASE_URL),
        title: post.title,
        description: post.description,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            siteName: 'Beenchangseo Blog',
            description: post.description,
            url: `/${post._raw.flattenedPath}`,
            locale: 'ko_KR',
            type: 'article',
            tags: post.tags,
        },
        twitter: {
            creator: 'beenchangseo',
            title: post.title,
            description: post.description,
        },
    };
};

const Post = ({params}: {params: {slug: string}}) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) {
        return false;
    }

    return (
        <>
            <section>
                <div className="mt-10 pb-10 border-b-2 mb-10 prose dark:prose-invert">
                    <h1 className="mb-16 font-bold text-2xl sm:text-4xl font-mono">{post.title}</h1>
                    <Mdx code={post.body.code} />
                </div>
            </section>
        </>
    );
};
export default Post;
