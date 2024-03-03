import {Mdx} from '@/components/Mdx';
import {allPosts} from 'contentlayer/generated';

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }));
}

const Post = ({params}: {params: {slug: string}}) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) {
        return false;
    }

    return (
        <section>
            <div className="mt-10 pb-10 border-b-2 mb-10 prose dark:prose-invert">
                <h1 className="mb-16 font-bold text-2xl sm:text-4xl font-mono">{post.title}</h1>
                <Mdx code={post.body.code} />
            </div>
        </section>
    );
};
export default Post;
