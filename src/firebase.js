// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEK1T1sa66_hMTywoF2yUdO2a5gcETnI8",
  authDomain: "clone-c02d8.firebaseapp.com",
  projectId: "clone-c02d8",
  storageBucket: "clone-c02d8.appspot.com",
  messagingSenderId: "848579940270",
  appId: "1:848579940270:web:9489c337cd9ee0f668423f",
  measurementId: "G-8NN9TSHBCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();