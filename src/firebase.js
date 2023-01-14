// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firebase-firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRpv26Q3JL0meS2AR2MuHwZKrCwoTukfM",
  authDomain: "parabellum-81b69.firebaseapp.com",
  projectId: "parabellum-81b69",
  storageBucket: "parabellum-81b69.appspot.com",
  messagingSenderId: "30380897537",
  appId: "1:30380897537:web:aa1ccee04bceb0a1531700",
  measurementId: "G-FWSKZPN3HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// const db = getFirestore(app)