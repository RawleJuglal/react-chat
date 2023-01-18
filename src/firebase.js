// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzksNfZlHExxpUFZKHR2rVNiZVcRtZRfg",
  authDomain: "react-chat-rj.firebaseapp.com",
  projectId: "react-chat-rj",
  storageBucket: "react-chat-rj.appspot.com",
  messagingSenderId: "541291065159",
  appId: "1:541291065159:web:4c9add62d49e869d75a662",
  measurementId: "G-SFS05JJ20R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);