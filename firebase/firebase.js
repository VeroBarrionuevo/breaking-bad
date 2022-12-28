// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVkuB7isI5no9qWKtq5gV27VRy5sJ6fY",
  authDomain: "next-auth-breaking-bad.firebaseapp.com",
  projectId: "next-auth-breaking-bad",
  storageBucket: "next-auth-breaking-bad.appspot.com",
  messagingSenderId: "1059732504172",
  appId: "1:1059732504172:web:a01a8cc850d026299de249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);