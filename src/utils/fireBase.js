// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyBuQ1B_s0u4xvvtiONvDoH-H9Io5VChFJs",
  authDomain: "netflixlogininfo-3682e.firebaseapp.com",
  projectId: "netflixlogininfo-3682e",
  storageBucket: "netflixlogininfo-3682e.appspot.com",
  messagingSenderId: "406848735198",
  appId: "1:406848735198:web:200c8b50b1dd750c8eff4f",
  measurementId: "G-TRH9BJXDD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()