import Link from 'next/link';

interface BlogPostProps {
    date: string;
    title: string;
    des: string;
    slug: string;
    categories: string[];
}

export default function BlogPost({date, title, des, slug, categories}: BlogPostProps) {
    return (
        <div className="w-full my-7">
            <Link href={`/blog/post/${slug}`} passHref>
                <div className="font-medium text-xs transition text-gray-500 dark:text-gray-300">
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className="font-extrabold text-xl sm:text-2xl mt-2 transition text-black dark:text-white hover:text-green-500 dark:hover:text-green-500">
                    {title}
                </div>
                <div className="font-medium text-base transition text-gray-600 dark:text-gray-400 sm:text-lg mt-1">
                    {des}
                </div>
            </Link>
            <div className="flex flex-wrap gap-2 mt-3">
                {categories.map((category) => (
                    <Link 
                        key={category} 
                        href={`/category?filter=${encodeURIComponent(category)}`}
                        className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
}
