// src/firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACfqEvqg3Lze756f0iVIFsC_EcZxrVeeE",
  authDomain: "ecommerce-store-rutuja.firebaseapp.com",
  projectId: "ecommerce-store-rutuja",
  storageBucket: "ecommerce-store-rutuja.appspot.com",
  messagingSenderId: "44094458642",
  appId: "1:44094458642:web:966f58302f24b484a941cb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
