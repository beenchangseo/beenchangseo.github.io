import {GetAllPostResponse} from '../app/api/posts/route';
import BlogPost from './BlogPost';

type PostListProps = {
    posts: GetAllPostResponse[];
}

export default function PostList({posts}: PostListProps) {
    return (
        <div className="flex flex-col">
            {posts.map((post: GetAllPostResponse) => (
                <BlogPost
                    date={post.update_time}
                    title={post.title}
                    des={post.description}
                    slug={post.id}
                    key={post.title}
                />
            ))}
        </div>
    );
}
