import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD81v53WoyTIvD6y78HgkLxNY9r_zeSMrM",
    authDomain: "fir-test-ec17e.firebaseapp.com",
    projectId: "fir-test-ec17e",
    storageBucket: "fir-test-ec17e.appspot.com",
    messagingSenderId: "1079732807865",
    appId: "1:1079732807865:web:c47e9c9e6fb9a45a215368",
    measurementId: "G-NE2DELX8N0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);