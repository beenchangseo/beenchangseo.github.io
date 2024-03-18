import Head from 'next/head';
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
        title: post.title,
        description: post.description,
        keywords: post.tags.join(', '),
    };
};

const Post = ({params}: {params: {slug: string}}) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) {
        return false;
    }

    const description = post.description;

    return (
        <>
            <Head>
                <meta property="og:title" content={post.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={post.description} />
                <meta property="og:url" content={'https://beenchangseo.github.io/' + params.slug} />
            </Head>
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
