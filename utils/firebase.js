import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxyGEvhEAR-Za3eC3jY36D56zqU2UlpSM",
    authDomain: "restaurants-14125.firebaseapp.com",
    projectId: "restaurants-14125",
    storageBucket: "restaurants-14125.appspot.com",
    messagingSenderId: "567780711009",
    appId: "1:567780711009:web:a227e3a3354a0f26a16820"
  }
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig)