'use client';

import {createContext, useEffect, useState, ReactNode} from 'react';
import {auth} from '../firebase/firebase';
import {onAuthStateChanged, User} from 'firebase/auth';
import {useRouter} from 'next/navigation';

interface AuthContextProps {
    user: User | null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    loading: true,
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={{user, loading}}>{children}</AuthContext.Provider>;
};
