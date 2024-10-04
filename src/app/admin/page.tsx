import SignOutButton from '@/components/SignoutButton';
import {auth} from '../lib/auth';

export default async function Admin() {
    const session = await auth();

    return (
        <>
            <div className="max-w-sm mx-auto mt-24 p-6">
                <h1>관리자 페이지</h1>
                <p>안녕하세요, {session?.user?.email}님!</p>
                {/* 관리자용 콘텐츠 추가 */}
                <SignOutButton />
            </div>
        </>
    );
}
