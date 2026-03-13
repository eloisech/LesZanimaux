import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXnF_GSJWIHH5lpHqaHuazhjSCYRFqcps",
  authDomain: "leszanimaux-9b8c0.firebaseapp.com",
  projectId: "leszanimaux-9b8c0",
  storageBucket: "leszanimaux-9b8c0.firebasestorage.app",
  messagingSenderId: "85589271397",
  appId: "1:85589271397:web:a1295b06b3bb80e903778c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);