// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-d908f.firebaseapp.com",
  projectId: "mern-real-estate-d908f",
  storageBucket: "mern-real-estate-d908f.appspot.com",
  messagingSenderId: "101514320224",
  appId: "1:101514320224:web:5809322f73ea947b442605",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);
