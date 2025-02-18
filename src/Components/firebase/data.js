import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyB0nqNMkrycfQmSkifV5wRZMTTj3iHkE-I",
  authDomain: "ecommerce-myshop-73d37.firebaseapp.com",
  projectId: "ecommerce-myshop-73d37",
  storageBucket: "ecommerce-myshop-73d37.firebasestorage.app",
  messagingSenderId: "619139230773",
  appId: "1:619139230773:web:95f407eda260ec11c4d57c",
  measurementId: "G-EP3H76N9WC"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
