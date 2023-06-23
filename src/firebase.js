// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDEQ2hr4S1wiPiDt52e3ntF_KEJeLi72DM",
    authDomain: "fir-app-b59cc.firebaseapp.com",
    projectId: "fir-app-b59cc",
    storageBucket: "fir-app-b59cc.appspot.com",
    messagingSenderId: "586903746041",
    appId: "1:586903746041:web:e4e1223bda988833313928"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;