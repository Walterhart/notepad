// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDriBGbZFO_wul-psutFDvZIDU5-t-_v7s",
  authDomain: "notepad-cdd40.firebaseapp.com",
  projectId: "notepad-cdd40",
  storageBucket: "notepad-cdd40.appspot.com",
  messagingSenderId: "271596114536",
  appId: "1:271596114536:web:cd0f9e289060b548cc61dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
