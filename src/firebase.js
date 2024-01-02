import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu_X7zL3T4fMhgb0Uihl8mTIPy7jenJNk",
  authDomain: "chat-6d259.firebaseapp.com",
  projectId: "chat-6d259",
  storageBucket: "chat-6d259.appspot.com",
  messagingSenderId: "755369153817",
  appId: "1:755369153817:web:b5321e46c95ca34c286188",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
