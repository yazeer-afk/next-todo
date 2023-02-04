import {
    createContext,
    FC,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    UserCredential,
} from "firebase/auth";

import { auth, db } from "../../firebase";

interface IAuthProvider {
    children: any;
}

interface IAuthContext {
    currentUser?: User | null;
    signin?: (email: string, password: string) => Promise<UserCredential>
    signup?: (email: string, password: string) => Promise<UserCredential>
    signout?: () => Promise<void>
    userInfo?: MutableRefObject<any>
}

const AuthContext = createContext<IAuthContext>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>();
    const [loading, setLoading] = useState(true);
    const userInfo = useRef();

    const signup = async (email: string, password: string) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };
    const signin = async (email: string, password: string) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const signout = async () => {
        return await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        signin,
        signout,
        userInfo,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
