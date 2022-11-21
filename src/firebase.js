import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpUJtbE9YAqM9rXojWE6mOfG0QNI2ltDs",
  authDomain: "crud-actividad1.firebaseapp.com",
  projectId: "crud-actividad1",
  storageBucket: "crud-actividad1.appspot.com",
  messagingSenderId: "40880237441",
  appId: "1:40880237441:web:d97049f31b4a88d1bb5680"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export {firebase}