// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARvKuuHHbD8-eiY4jqarMjfUl7jh9B4nE",
  authDomain: "carrito-santi.firebaseapp.com",
  projectId: "carrito-santi",
  storageBucket: "carrito-santi.appspot.com",
  messagingSenderId: "359507152927",
  appId: "1:359507152927:web:481bdb9defd026ec8a852a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;