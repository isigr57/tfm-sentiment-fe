import { useContext, createContext, useState, useCallback } from 'react';
import { useAuth } from '../auth/AuthContext';
import { db } from 'auth/FirebaseConfig';
import { collection, where, getDocs, getDoc, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const Firestore = createContext();

export const FirestoreProvider = ({ children }) => {

    const { currentUser } = useAuth();
    const [sessions, setSessions] = useState([]);
    const [students, setStudents] = useState([]);

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

    const getStudent = useCallback(async (id) => {
        try {
            const user = currentUser;
            if (user) {
                const studentsRef = collection(db, 'students');
                const docSnap = await getDoc(doc(studentsRef, id));
                if (docSnap.exists()) {
                    return { id: docSnap.id, ...docSnap.data() };
                } else {
                    console.log('No such document!');
                }
            }
        } catch (error) {
            console.error('Error getting document: ', error);
        }
    }, [currentUser]);

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

    const getSession = useCallback(async (id) => {
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                const docSnap = await getDoc(doc(sessionsRef, id));
                if (docSnap.exists()) {
                    return { id: docSnap.id, ...docSnap.data() };
                } else {
                    console.log('No such document!');
                }
            }
        } catch (error) {
            console.error('Error getting document: ', error);
        }
    }, [currentUser]);

    const deleteSession = useCallback(async (id) => {
        console.log('deleteSession');
        try {
            const user = currentUser;
            if (user) {
                const sessionsRef = collection(db, 'sessions');
                const studentsRef = collection(db, 'students');
                const session = await getSession(id);
                console.log(session.students);
                for (let i = 0; i < session.students.length; i++) {
                    const student = await getStudent(session.students[i]);
                    console.log(student);
                    const updatedSessions = student.sessions.filter(row => row !== id);
                    console.log(updatedSessions);
                    await updateDoc(doc(studentsRef, student.id), { sessions: updatedSessions });
                }
                await deleteDoc(doc(sessionsRef, id));
                setSessions(sessions.filter(row => row.id !== id));
            }
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    }, [currentUser, sessions, getSession, getStudent]);


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
        <Firestore.Provider value={{ sessions, students, getSessions, getSession, deleteSession, updateSession, getStudents, getStudent }}>
            {children}
        </Firestore.Provider>
    );
};

export const useFirestore = () => {
    return useContext(Firestore);
};
