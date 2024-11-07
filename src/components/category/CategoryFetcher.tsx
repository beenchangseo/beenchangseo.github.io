'use client';

import {useFetchCategories} from '../../hooks/useFetchCategories';

export default function CategoryFetcher(): null {
    useFetchCategories();
    return null;
}
