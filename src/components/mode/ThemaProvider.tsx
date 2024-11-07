'use client';

import {ThemeProvider as Provider} from 'next-themes';
import {ReactNode} from 'react';

type ThemaProviderProps = {
    children: ReactNode;
};

export default function ThemeProvider({children}: ThemaProviderProps) {
    return (
        <Provider enableSystem={true} attribute="class">
            {children}
        </Provider>
    );
}
