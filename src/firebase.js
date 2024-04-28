// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhG4d2BkBsEwmHLULbB8taS34yU9SdYGw",
  authDomain: "emergency-res-8u.firebaseapp.com",
  projectId: "emergency-res-8u",
  storageBucket: "emergency-res-8u.appspot.com",
  messagingSenderId: "400739037618",
  appId: "1:400739037618:web:9bc9b660adc6f75fca74ab",
  measurementId: "G-VDNM9TFQ6L"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);
export const fireAuth = getAuth(firebase)
export const db = getFirestore(firebase)

export default firebase