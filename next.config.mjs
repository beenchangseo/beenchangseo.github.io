/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    images: {
        unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
    },
    compiler: {
        styledComponents: true, // styled-components 사용 시 컴파일러에 추가
    },
};

export default nextConfig;
