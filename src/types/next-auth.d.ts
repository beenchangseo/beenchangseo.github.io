import NextAuth, {DefaultSession} from 'next-auth';
import {JWT} from 'next-auth/jwt';

// JWT 타입 확장
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        accessTokenExpires?: number;
        refreshToken?: string;
        user?: {
            name?: string;
            email?: string;
        };
        error?: string;
    }
}

// Session 타입 확장
declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        error?: string;
    }
}
