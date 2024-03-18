import {defineDocumentType, makeSource} from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import {Pluggable} from 'unified';

const options = {
    theme: 'github-dark',
};

export const Post = defineDocumentType(() => ({
    name: 'Post',
    contentType: 'mdx',
    filePathPattern: `**/*.mdx`,
    fields: {
        title: {type: 'string', required: true},
        date: {type: 'string', required: true},
        description: {type: 'string', required: true},
        category: {type: 'list', of: {type: 'string'}, required: true},
        tags: {type: 'list', of: {type: 'string'}, required: true},
    },
    // 커스텀 필드 생성
    // computedFields: {
    //     url: {type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}`},
    // },
}));

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [[rehypePrettyCode, options]] as Pluggable[],
    },
});
