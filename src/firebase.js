import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTsnwaDpuclKvilEBUOCt-ltAz_ywlqcY",
  authDomain: "funk-chat.firebaseapp.com",
  projectId: "funk-chat",
  storageBucket: "funk-chat.appspot.com",
  messagingSenderId: "581135654660",
  appId: "1:581135654660:web:5fd60b5a3423244f6efa51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();