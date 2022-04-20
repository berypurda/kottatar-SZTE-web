// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDq0hFVdYy4r-whzaLX7gR92qTdMPyQZSM",
  authDomain: "kottatar-szte.firebaseapp.com",
  projectId: "kottatar-szte",
  storageBucket: "kottatar-szte.appspot.com",
  messagingSenderId: "1041888028210",
  appId: "1:1041888028210:web:8e1492806c65b642e67e2b",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
