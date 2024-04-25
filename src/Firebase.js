// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCOW6OXi7l--SpPQvNgYb0dVwjcHYZ11c",
  authDomain: "spn-landingpage.firebaseapp.com",
  projectId: "spn-landingpage",
  storageBucket: "spn-landingpage.appspot.com",
  messagingSenderId: "19334848991",
  appId: "1:19334848991:web:fba255266b8156c2b0246a",
  measurementId: "G-P9KEB1BS3W",
  databaseURL:"https://spn-landingpage-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);