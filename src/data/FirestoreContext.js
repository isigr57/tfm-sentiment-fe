import { useContext, createContext, useState, useCallback } from 'react';
import { useAuth } from '../auth/AuthContext';
import { db } from 'auth/FirebaseConfig';
import { collection, where, getDocs, getDoc, query, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore';

const Firestore = createContext();

export const FirestoreProvider = ({ children }) => {

    const { currentUser } = useAuth();
    const [sessions, setSessions] = useState([]);
    const [students, setStudents] = useState([]);

    const getDocFromReference = async (reference) => {
        console.log('getDocFromReference');
        const docSnap = await getDoc(reference);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log('No such document!');
        }
    }

    const getDocsFromReferences = async (references) => {
        console.log('getDocsFromReferences');
        const docs = [];
        references.forEach(async (reference) => {
            const docSnap = await getDoc(reference);
            if (docSnap.exists()) {
                docs.push({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No such document!');
            }
        });
        return docs;
    }

    const getStudents = useCallback(async () => {
        try {
            const user = currentUser;
            if (user) {
                const studentsRef = collection(db, 'students');
                const q = where('teachersId', 'array-contains', user.uid);
                const querySnapshot = await getDocs(query(studentsRef, q));
                const students = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() };
                });
                // Order by createdAt
                students.sort((a, b) => b.createdAt - a.createdAt);
                setStudents(students);
                console.log('getStudents');
                console.log(students);
            }
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    }, [currentUser]);

    const addDummyStudent = useCallback(async () => {
        console.log('addDummyStudent');
        try {
            const user = currentUser;
            if (user) {
                const studentsRef = collection(db, 'students');
                const student = {
                    //name of the student Dummy Student + random number
                    name: `Dummy Student ${Math.floor(Math.random() * 1000)}`,
                    email: `dummy${Math.floor(Math.random() * 1000)}@gmail.com`,
                    createdAt: new Date(),
                    teachersId: [user.uid],
                    sessionsCount: 0,
                    sessions: [],
                    recognitionImages: [
                        'https://placehold.co/400',
                        'https://placehold.co/400',
                        'https://placehold.co/400',
                        'https://placehold.co/400'
                    ],
                    imagePath: 'https://placehold.co/400'
                };
                await addDoc(studentsRef, student);
                const updatedStudents = await getStudents();
                if (updatedStudents) {
                    setStudents(updatedStudents);
                }
            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }, [currentUser, getStudents]);


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
                setSessions(sessions);
                console.log('getSessions');
                console.log(sessions);
            }
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    }, [currentUser]);

    const addDummySession = useCallback(async () => {
        console.log('addDummySession');
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
                const updatedSessions = await getSessions();
                if (updatedSessions) {
                    setSessions(updatedSessions);
                }
            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }, [currentUser, getSessions]);

    const deleteSession = useCallback(async (id) => {
        console.log('deleteSession');
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                await deleteDoc(doc(sessionsRef, id));
                setSessions(sessions.filter(row => row.id !== id));
            }
        } catch (error) {
            console.error('Error deleting document: ', error);
        }

    }, [currentUser, sessions]);

    const updateSession = useCallback(async (session) => {
        console.log('updateSession');
        try {
            const user = currentUser;
            //Data is all elements of the session except the id
            const data = { ...session };
            delete data.id;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                await updateDoc(doc(sessionsRef, session.id), data);
                const updatedSessions = await getSessions();
                if (updatedSessions) {
                    setSessions(updatedSessions);
                }
            }
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    }, [currentUser, getSessions]);

    return (
        <Firestore.Provider value={{ sessions, students, getSessions, deleteSession, addDummySession, updateSession, getStudents, addDummyStudent, getDocFromReference, getDocsFromReferences }}>
            {children}
        </Firestore.Provider>
    );
};

export const useFirestore = () => {
    return useContext(Firestore);
};
