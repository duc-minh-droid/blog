// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBwFGvsjiNs_j1vKcRKzKKaz-EwQMYd5j0",
  authDomain: "blog-cf9f5.firebaseapp.com",
  projectId: "blog-cf9f5",
  storageBucket: "blog-cf9f5.appspot.com",
  messagingSenderId: "3597178225",
  appId: "1:3597178225:web:07c37eb4afddcfb8c3d2d0",
  measurementId: "G-WSCSNV738W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const blogsDB = collection(db, 'blogs')
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()