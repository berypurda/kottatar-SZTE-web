// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq0hFVdYy4r-whzaLX7gR92qTdMPyQZSM",

  authDomain: "kottatar-szte.firebaseapp.com",

  projectId: "kottatar-szte",

  storageBucket: "kottatar-szte.appspot.com",

  messagingSenderId: "1041888028210",

  appId: "1:1041888028210:web:8e1492806c65b642e67e2b",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

//init firestore
const db = getFirestore()

export { db, auth }
