// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJp4tL1urjj6HwK-1i3iL_LgzhTPIAnxo",
  authDomain: "portafolio-a1.firebaseapp.com",
  projectId: "portafolio-a1",
  storageBucket: "portafolio-a1.appspot.com",
  messagingSenderId: "841916845795",
  appId: "1:841916845795:web:0f222266af80eaf0997fd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();// conexion a la BD
export {
  db,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
};

