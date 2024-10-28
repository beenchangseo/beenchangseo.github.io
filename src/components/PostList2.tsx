import {GetAllPostResponse} from '../app/api/posts/route';
import BlogPost from './BlogPost';

interface RecentPostsProps {
    posts: GetAllPostResponse[];
}

export default function PostList2({posts}: RecentPostsProps) {
    return (
        <div className="flex flex-col">
            {posts.map((post: GetAllPostResponse) => (
                <BlogPost
                    date={post.update_time}
                    title={post.title}
                    des={post.description}
                    slug={post.title}
                    key={post.title}
                />
            ))}
        </div>
    );
}
