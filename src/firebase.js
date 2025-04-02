// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATCtil8JdXfv4-4yndT34C6zRGpS3A48",
  authDomain: "portfolio-bacb7.firebaseapp.com",
  projectId: "portfolio-bacb7",
  storageBucket: "portfolio-bacb7.firebasestorage.app",
  messagingSenderId: "968013815674",
  appId: "1:968013815674:web:2a34a7e8b8c98ad6bec0c3",
  measurementId: "G-2LY2PLV5N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db, analytics }; // Export Firestore and Analytics