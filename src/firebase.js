import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7b8pjUspKs4tkWEUP-lGa4siTQWTF_4s",
    authDomain: "ezr-react.firebaseapp.com",
    projectId: "ezr-react",
    storageBucket: "ezr-react.appspot.com",
    messagingSenderId: "752359507628",
    appId: "1:752359507628:web:5f7d052ee179f47e134109",
    measurementId: "G-BS3ZMRHJTM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
