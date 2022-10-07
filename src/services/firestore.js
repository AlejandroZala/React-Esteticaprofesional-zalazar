// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// oBJETO CON DATOS DE LA APLICACION (OCULTAR SI EL PROYECTO ES COMERCIAL)
const firebaseConfig = {
  apiKey: "AIzaSyBdPkUW1E-Ua8NoFfC7Qi0pB4mEddVxzWA",
  authDomain: "reactcoderzala.firebaseapp.com",
  projectId: "reactcoderzala",
  storageBucket: "reactcoderzala.appspot.com",
  messagingSenderId: "578724664336",
  appId: "1:578724664336:web:b99941bfe2f8075bc86695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore (app);

export default firestore;