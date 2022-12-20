import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCedUkkEKA08YD8lT5F_dPp5HFtTFFUn6c",
  authDomain: "clone-8eaba.firebaseapp.com",
  projectId: "clone-8eaba",
  storageBucket: "clone-8eaba.appspot.com",
  messagingSenderId: "365111451868",
  appId: "1:365111451868:web:e7844821c0c4bbdac5d419",
  measurementId: "G-5JTN6NBN2E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
