import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2C4xJX4xIM7uyXN1ZBx4nljB2c9IpeZY",
  authDomain: "proyectofinal-coderhouse-e381a.firebaseapp.com",
  projectId: "proyectofinal-coderhouse-e381a",
  storageBucket: "proyectofinal-coderhouse-e381a.appspot.com",
  messagingSenderId: "974081743980",
  appId: "1:974081743980:web:b0a133e45baec8d23e0c49"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)