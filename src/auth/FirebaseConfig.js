// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVQfRIYiEsMGRXBu6pfaSj_4fmClWHGHg",
  authDomain: "sapere-83929.firebaseapp.com",
  projectId: "sapere-83929",
  storageBucket: "sapere-83929.appspot.com",
  messagingSenderId: "884920332741",
  appId: "1:884920332741:web:648a7cd6dbaa13c62d9bac",
  measurementId: "G-ZRSCN1GKW0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

auth.setPersistence(browserLocalPersistence);

const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, db, googleProvider, analytics };
