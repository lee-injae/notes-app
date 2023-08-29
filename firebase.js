import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwRdozQ7oE7kVeDO6mSgFrYit6dbgT5K4",
  authDomain: "react-notes-6ed5f.firebaseapp.com",
  projectId: "react-notes-6ed5f",
  storageBucket: "react-notes-6ed5f.appspot.com",
  messagingSenderId: "861105070085",
  appId: "1:861105070085:web:67172cbf183b2f82977c6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

