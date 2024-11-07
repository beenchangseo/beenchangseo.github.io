'use client';

import React, {ReactNode} from 'react';
import {RecoilRoot} from 'recoil';
import CategoryFetcher from './CategoryFetcher';

type CategoryProviderProps = {
    children: ReactNode;
};

export default function CategoryProvider({children}: CategoryProviderProps) {
    return (
        <RecoilRoot>
            <CategoryFetcher /> {/* 데이터 페칭 로직 */}
            {children}
        </RecoilRoot>
    );
}
