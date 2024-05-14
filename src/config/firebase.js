// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTx8n61brZaAknMS-6nky-5wW7052bdM",
  authDomain: "hydrotribe-224a3.firebaseapp.com",
  projectId: "hydrotribe-224a3",
  storageBucket: "hydrotribe-224a3.appspot.com",
  messagingSenderId: "266942302016",
  appId: "1:266942302016:web:05c75e5472167a12259ca5",
  measurementId: "G-75M0M4VM78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
