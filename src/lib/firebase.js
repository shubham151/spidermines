// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// Your Firebase configuration – load these values from .env.local
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID, // Optional
};

// Initialize Firebase if no instances exist.
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// For Firestore in Node.js, force long polling and disable fetch streams.
const db = initializeFirestore(getApps()[0], {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { db };
