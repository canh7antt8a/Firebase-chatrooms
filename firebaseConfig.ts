// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwzIaPfxTAt4GnCU7TkCKhdGXS25VZxsE",
  authDomain: "testfcm-f3ccc.firebaseapp.com",
  projectId: "testfcm-f3ccc",
  storageBucket: "testfcm-f3ccc.appspot.com",
  messagingSenderId: "815885793054",
  appId: "1:815885793054:web:5eb10491a723b19e9cbb0f",
  measurementId: "G-13CVJJ4YBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
