import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHhaUXD8nN2g7RkwVEKRA-sLbziTKZEjE",
  authDomain: "nadespep-e6542.firebaseapp.com",
  projectId: "nadespep-e6542",
  storageBucket: "nadespep-e6542.firebasestorage.app",
  messagingSenderId: "319048705769",
  appId: "1:319048705769:web:4fcd73d77e9778ccb1b278"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
