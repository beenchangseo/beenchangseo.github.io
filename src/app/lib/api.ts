type GenericResponse<T> = {
    data: T;
};

export type GetAllBlogPostResponseDto = {
    id: string;
    slug: string;
    title: string;
    description: string;
    categories: string[];
    update_time: string;
};

export type GetBlogPostResponseDto = {
    user_id: string;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    categories: string[];
    contents: string;
    update_time: string;
};

export type GetCategoryResponseDto = {
    id: string;
    title: string;
    keyword: string;
};

export async function fetchPost(slug: string): Promise<GenericResponse<GetBlogPostResponseDto>> {
    const res = await fetch(`${process.env.BACKEND_API_SERVER}/blog/post?slug=${slug}`);
    if (!res.ok) throw new Error('Failed to fetch post');

    return res.json();
}

export async function fetchAllPosts(): Promise<GenericResponse<GetAllBlogPostResponseDto[]>> {
    const res = await fetch(`${process.env.BACKEND_API_SERVER}/blog/post/list`);
    if (!res.ok) throw new Error('Failed to fetch posts');

    return res.json();
}

export async function fetchCategories(): Promise<GenericResponse<GetCategoryResponseDto[]>> {
    const res = await fetch(`${process.env.BACKEND_API_SERVER}/category/list`);
    if (!res.ok) throw new Error('Failed to fetch categories');

    return res.json();
}
