// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAOwNUxliBJ34T4LU4NDYrgLWkzHFXLjk",
  authDomain: "e-commerce-4e0f4.firebaseapp.com",
  projectId: "e-commerce-4e0f4",
  storageBucket: "e-commerce-4e0f4.appspot.com",
  messagingSenderId: "577808308368",
  appId: "1:577808308368:web:3d95cbfcbd5bd42900e015",
  measurementId: "G-F4XHB4CM66"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
