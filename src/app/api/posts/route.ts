import axios from 'axios';
import {NextResponse} from 'next/server';

export type GetAllPostResponse = {
    id: string;
    title: string;
    description: string;
    categories: string[];
    update_time: string;
};

export async function GET() {
    try {
        const response: GetAllPostResponse[] = (
            await axios.get(`${process.env.BACKEND_API_SERVER}/blog/post/list`)
        ).data;

        return NextResponse.json(response);
    } catch (error: any) {
        // axios 에러 핸들링
        if (axios.isAxiosError(error) && error.response) {
            // 서버 에러 응답을 그대로 반환
            return NextResponse.json(
                {
                    status: error.response.status,
                    message: error.response.data.message || 'An error occurred',
                    details: error.response.data,
                },
                {status: error.response.status},
            );
        }

        // 예상치 못한 에러에 대한 기본 응답
        return NextResponse.json(
            {
                status: 500,
                message: 'Internal Server Error',
                details: error.message,
            },
            {status: 500},
        );
    }
}
