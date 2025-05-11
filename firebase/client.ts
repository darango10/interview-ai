// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRS3mYwLeevmhA_5xOXO-n8g_-02nCsAU",
  authDomain: "prepwise-29bca.firebaseapp.com",
  projectId: "prepwise-29bca",
  storageBucket: "prepwise-29bca.firebasestorage.app",
  messagingSenderId: "108185911529",
  appId: "1:108185911529:web:c87de9471ce5d6494d7078",
  measurementId: "G-LP3FQFT7GX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
