// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQTZynzHlIHmLFGkCraQvxvfXPvooxVtk",
  authDomain: "netflixgpt-6c64e.firebaseapp.com",
  projectId: "netflixgpt-6c64e",
  storageBucket: "netflixgpt-6c64e.appspot.com",
  messagingSenderId: "698872434059",
  appId: "1:698872434059:web:f930bf5492c02ec897738e",
  measurementId: "G-3XL4W9DERC",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
