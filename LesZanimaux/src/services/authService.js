import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebaseService';

export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};