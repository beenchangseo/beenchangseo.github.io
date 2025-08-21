import BlogPost from './BlogPost';
import {GetAllBlogPostResponseDto} from '../app/lib/api';

type PostListProps = {
    posts: GetAllBlogPostResponseDto[];
}

export default function PostList({posts}: PostListProps) {
    return (
        <div className="flex flex-col">
            {posts.map((post: GetAllBlogPostResponseDto) => (
                <BlogPost
                    date={post.create_time}
                    title={post.title}
                    des={post.description}
                    slug={post.slug}
                    categories={post.categories}
                    key={post.title}
                />
            ))}
        </div>
    );
}
