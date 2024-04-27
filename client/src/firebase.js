// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-427a7.firebaseapp.com",
  projectId: "mern-estate-427a7",
  storageBucket: "mern-estate-427a7.appspot.com",
  messagingSenderId: "837402224340",
  appId: "1:837402224340:web:44b7947c7303f26b14fd41",
  measurementId: "G-SHM5SLMBNK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);