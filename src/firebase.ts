// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your actual config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyA5-3Z-95NAyYT1PlvwIa3SCDNq4kAvyJg",
    authDomain: "bike-customization.firebaseapp.com",
    projectId: "bike-customization",
    storageBucket: "bike-customization.firebasestorage.app",
    messagingSenderId: "170711703269",
    appId: "1:170711703269:web:f6815604a512065e053e0c",
    measurementId: "G-MVPN5C0L1X"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the auth instance
export const auth = getAuth(app);
