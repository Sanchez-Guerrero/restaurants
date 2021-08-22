import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAMb6Tjz2O977UeFp52w7SwIpPzzYgEJg",
  authDomain: "restaurants-93a33.firebaseapp.com",
  projectId: "restaurants-93a33",
  storageBucket: "restaurants-93a33.appspot.com",
  messagingSenderId: "877391204171",
  appId: "1:877391204171:web:ab0c8a3a0fcfa9fdc6a2ce",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
