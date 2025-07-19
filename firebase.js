// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKCUaVFrh8RwDsKDZ3pk9vCDugCrga7N0",
  authDomain: "easy-labour-el.firebaseapp.com",
  projectId: "easy-labour-el",
  storageBucket: "easy-labour-el.firebasestorage.app",
  messagingSenderId: "832158311281",
  appId: "1:832158311281:web:81d1d09b36ad116661ccd0",
  measurementId: "G-6NCVPGE0VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);