// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxPU4CkzNEbdGx5VTbDJVLjz_yTJTywTo",
    authDomain: "joblink-f6b34.firebaseapp.com",
    projectId: "joblink-f6b34",
    storageBucket: "joblink-f6b34.appspot.com",
    messagingSenderId: "998033263846",
    appId: "1:998033263846:web:ea33a3be6ee80ea2ffbf27",
    measurementId: "G-EVK0FPDV7D"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
