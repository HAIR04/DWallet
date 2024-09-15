// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChsLwrWVX1X5QIZ0rhEe71Xacza1ylCyk",
  authDomain: "dwallet-3f29e.firebaseapp.com",
  databaseURL: "https://dwallet-3f29e-default-rtdb.firebaseio.com",
  projectId: "dwallet-3f29e",
  storageBucket: "dwallet-3f29e.appspot.com",
  messagingSenderId: "64419937444",
  appId: "1:64419937444:web:325adb56458b356046ba31",
  measurementId: "G-RT2X7YJ6L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);