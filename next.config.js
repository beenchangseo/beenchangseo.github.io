/** @type {import('next').NextConfig} */
// const {withContentlayer} = require('next-contentlayer');

const nextConfig = {
    // output: 'export', // github page에서 vercel로 이전하면서 주석 처리함
    reactStrictMode: false,
    images: {
        unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
    },
    compiler: {
        styledComponents: true, // styled-components 사용 시 컴파일러에 추가
    },
};

module.exports = nextConfig;
