import {atom} from 'recoil';
import {GetAllCategoryResponse} from '../app/api/category/route';

export const categoryState = atom<GetAllCategoryResponse[]>({
    key: 'categoryState',
    default: [], // 초기 상태를 빈 배열로 설정
});
