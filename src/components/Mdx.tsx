import {useMDXComponent} from 'next-contentlayer/hooks';

export function Mdx({code}: {code: string}) {
    const MDXComponent = useMDXComponent(code);

    return <MDXComponent />;
}
