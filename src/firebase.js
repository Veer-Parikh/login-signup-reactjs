import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYprTryUxEqqUboOhiUN1sFSLtMCLg-Jg",
  authDomain: "auth-dev-cf868.firebaseapp.com",
  projectId: "auth-dev-cf868",
  storageBucket: "auth-dev-cf868.appspot.com",
  messagingSenderId: "858349491427",
  appId: "1:858349491427:web:e8cbcedb3c40e9b73ce1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Export the Firebase app

// Optionally, if you want to export the authentication object as well

const auth = getAuth(app);
export { auth,createUserWithEmailAndPassword };