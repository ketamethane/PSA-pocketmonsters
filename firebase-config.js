// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDocRzpgfFkJuHQjyquy6Uo2imYu21vRs",
  authDomain: "pocketmonsters-36d2e.firebaseapp.com",
  projectId: "pocketmonsters-36d2e",
  storageBucket: "pocketmonsters-36d2e.appspot.com",
  messagingSenderId: "245497780782",
  appId: "1:245497780782:web:13f642a5b365f7e7d05dbf",
  measurementId: "G-JBNBF8YQHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };