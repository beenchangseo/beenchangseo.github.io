'use client';

import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {categoryState} from '../state/categoryState';
import {GetAllCategoryResponse} from '../app/api/category/route';

export const useFetchCategories = () => {
    const setCategories = useSetRecoilState(categoryState);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/category', {
                    // cache: 'no-cache',
                }); // 서버 API 호출
                const data: GetAllCategoryResponse[] = (await response.json()).data;

                setCategories(data); // 받아온 데이터를 Recoil 상태로 설정
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [setCategories]);
};
