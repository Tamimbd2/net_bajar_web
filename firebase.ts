// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP8-TvOEGN5-RaXLW1-ysB5qsp6xi7ERc",
  authDomain: "netbazar-f491a.firebaseapp.com",
  projectId: "netbazar-f491a",
  storageBucket: "netbazar-f491a.firebasestorage.app",
  messagingSenderId: "524933960529",
  appId: "1:524933960529:web:466f6df1c90702fae8b970",
  measurementId: "G-M5Y51DFFMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
