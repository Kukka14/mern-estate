// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-estate-5a246.firebaseapp.com",
  projectId: "mern-estate-5a246",
  storageBucket: "mern-estate-5a246.appspot.com",
  messagingSenderId: "939906404593",
  appId: "1:939906404593:web:69bbeeb59456731b8ed950"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);