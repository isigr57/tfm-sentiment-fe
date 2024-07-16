import { useContext, createContext } from 'react';
import { useAuth } from '../auth/AuthContext';
import { db } from 'auth/FirebaseConfig';
import { collection, where, getDocs, query } from 'firebase/firestore';



const Firestore = createContext();

export const FirestoreProvider = ({ children }) => {

    const { currentUser } = useAuth();

    const getSessions = async () => {
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                const q = where('teacherId', '==', user.uid);
                const querySnapshot = await getDocs(query(sessionsRef, q));
                const sessions = querySnapshot.docs.map(doc => doc.data());
                return sessions;

            }
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    };

    return (
        <Firestore.Provider value={{ getSessions }}>
            {children}
        </Firestore.Provider>
    );
};

export const useFirestore = () => {
    return useContext(Firestore);
};
