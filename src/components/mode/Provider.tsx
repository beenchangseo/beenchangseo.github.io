'use client';

import {ThemeProvider} from 'next-themes';

type Props = {
    children: string | React.JSX.Element | React.JSX.Element[];
};

const Provider = ({children}: Props) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default Provider;
