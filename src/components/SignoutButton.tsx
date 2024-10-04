import {signOut} from '@/app/lib/auth';

export default function SignOutButton() {
    return (
        <form
            action={async () => {
                'use server';
                await signOut({redirectTo: '/'});
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    );
}
