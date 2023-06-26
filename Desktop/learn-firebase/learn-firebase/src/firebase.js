// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-_d-5yuD-rN08P6BynJJMU8nREGI9zM",
  authDomain: "fir-test-8420b.firebaseapp.com",
  projectId: "fir-test-8420b",
  storageBucket: "fir-test-8420b.appspot.com",
  messagingSenderId: "455238498160",
  appId: "1:455238498160:web:636b5bfc31a88c11ef41b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//
export const db = getFirestore(app);
