import { createContext, FC, MutableRefObject, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    UserCredential,
} from "firebase/auth";

import { auth } from "../../firebase";

interface IAuthProvider {
    children: any;
}

interface IAuthContext {
    currentUser?: User | null;
    signin?: (email: string, password: string) => Promise<UserCredential>;
    signup?: (email: string, password: string) => Promise<UserCredential>;
    signout?: () => Promise<void>;
    userInfo?: MutableRefObject<any>;
}

const AuthContext = createContext<IAuthContext>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const signup = async (email: string, password: string) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };
    const signin = async (email: string, password: string) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const signout = async () => {
        return await signOut(auth);
    };

    const value = {
        currentUser: user,
        signup,
        signin,
        signout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
