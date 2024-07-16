import { useContext, createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    getIdToken
} from 'firebase/auth';
import { auth } from './FirebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setUser] = useState('initializing');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const emailSignIn = async ({ email, password }) => {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        return credential.user;
    };

    const emailSignUp = async ({ email, password }) => {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(credential.user);
        return credential.user;
    }

    const recoverPassword = async ({ email }) => {
        await sendPasswordResetEmail(auth, email);
    }

    const resendVerificationEmail = async () => {
        await sendEmailVerification(auth.currentUser)
    }

    const logOut = async () => {
        await signOut(auth);
    }

    const refreshToken = async () => {
        const token = await getIdToken(auth.currentUser);
        localStorage.setItem('x-auth-token', token);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsEmailVerified(user.emailVerified);
                localStorage.setItem('x-auth-token', user.accessToken);
            } else {
                setUser(null);
                setIsEmailVerified(false);
                localStorage.removeItem('x-auth-token');
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, emailSignIn, emailSignUp, recoverPassword, resendVerificationEmail, loading, logOut, currentUser, isEmailVerified, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
