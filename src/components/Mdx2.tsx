import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

type MarkdownRendererProps = {
    markdown: string;
};

export function Mdx2({markdown}: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        />
    );
}
