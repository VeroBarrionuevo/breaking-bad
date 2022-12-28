import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      subscribe();
    };
  }, []);

  const value = {
    signUp,
    logIn,
    logOut,
    user,
    googleLogIn
  };

  return value;
};
