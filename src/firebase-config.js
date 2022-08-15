import { initializeApp } from "firebase/app";
import {getDatabase, ref, set} from "firebase/database"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "fir-test-ec17e.firebaseapp.com",
    databaseURL: "https://fir-test-ec17e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-test-ec17e",
    storageBucket: "fir-test-ec17e.appspot.com",
    messagingSenderId: "1079732807865",
    appId: "1:1079732807865:web:c47e9c9e6fb9a45a215368",
    measurementId: "G-NE2DELX8N0"
};

const app = initializeApp(firebaseConfig);
export const firebase = getDatabase(app);
const db = getDatabase();
// const reference = ref(db, 'discs/' + 'id');