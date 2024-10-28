'use client';

import MDEditor from '@uiw/react-md-editor';
import {useState} from 'react';

export default function BoardEditorPage() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('General');
    const [content, setContent] = useState('**Hello world!**');
    const [isSaved, setIsSaved] = useState(false);

    const categories = ['General', 'Technology', 'Lifestyle', 'Finance', 'Education'];

    const handleSave = () => {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const handlePublish = () => {
        if (!title || !content) {
            alert('제목과 내용을 모두 입력해 주세요.');
            return;
        }
        alert('게시글이 성공적으로 게시되었습니다.');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">게시글 작성</h1>

            {/* 제목 입력 */}
            <div className="mb-4">
                <label className="block text-xl font-semibold mb-2">제목</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="게시글 제목을 입력하세요"
                />
            </div>

            {/* 카테고리 선택 */}
            <div className="mb-4">
                <label className="block text-xl font-semibold mb-2">카테고리</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* 마크다운 에디터 */}
            <div className="mb-4">
                <label className="block text-xl font-semibold mb-2">내용</label>
                <MDEditor value={content} onChange={(val) => setContent(val || '')} />
            </div>

            {/* 임시 저장 및 게시 버튼 */}
            <div className="flex gap-4">
                <button
                    onClick={handleSave}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    {isSaved ? '저장됨' : '임시 저장'}
                </button>
                <button
                    onClick={handlePublish}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    게시
                </button>
            </div>
        </div>
    );
}
