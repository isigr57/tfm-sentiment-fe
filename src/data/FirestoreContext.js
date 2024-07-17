import { useContext, createContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from '../auth/AuthContext';
import { db } from 'auth/FirebaseConfig';
import { collection, where, getDocs, query, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore';

const Firestore = createContext();

export const FirestoreProvider = ({ children }) => {

    const { currentUser } = useAuth();
    const [rows, setRows] = useState([]);

    const getSessions = useCallback(async () => {
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                const q = where('teacherId', '==', user.uid);
                const querySnapshot = await getDocs(query(sessionsRef, q));
                const sessions = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() };
                });
                // Order by createdAt
                sessions.sort((a, b) => b.createdAt - a.createdAt);
                return sessions;
            }
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    }, [currentUser]);

    const addDummySession = useCallback(async () => {
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                const session = {
                    //name of the session Dummy Session + random number
                    name: `Dummy Session ${Math.floor(Math.random() * 1000)}`,
                    createdAt: new Date(),
                    teacherId: user.uid
                };
                await addDoc(sessionsRef, session);
                const updatedRows = await getSessions();
                if (updatedRows) {
                    setRows(updatedRows);
                }
            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }, [currentUser, getSessions]);

    const deleteSession = useCallback(async (id) => {
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                await deleteDoc(doc(sessionsRef, id));
                setRows(rows.filter(row => row.id !== id));
            }
        } catch (error) {
            console.error('Error deleting document: ', error);
        }

    }, [currentUser, rows]);

    const updateSession = useCallback(async (session) => {
        try {
            const user = currentUser;
            //Data is all elements of the session except the id
            const data = { ...session };
            delete data.id;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                await updateDoc(doc(sessionsRef, session.id), data);
                const updatedRows = await getSessions();
                if (updatedRows) {
                    setRows(updatedRows);
                }
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    }, [currentUser, getSessions]);

    useEffect(() => {
        if (!currentUser.uid) {
            return;
        }
        const fetchData = async () => {
            const sessions = await getSessions();
            if (sessions) {
                setRows(sessions);
            }
        }
        fetchData();
    }, [currentUser, getSessions]);

    return (
        <Firestore.Provider value={{ rows, getSessions, deleteSession, addDummySession, updateSession }}>
            {children}
        </Firestore.Provider>
    );
};

export const useFirestore = () => {
    return useContext(Firestore);
};
