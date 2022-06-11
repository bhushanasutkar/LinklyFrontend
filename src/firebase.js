// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,connectAuthEmulator} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-MBirEoEVL3UOzDOLCEdtQq6KQnJY9AA",
    authDomain: "backlink-marketplace.firebaseapp.com",
    projectId: "backlink-marketplace",
    storageBucket: "backlink-marketplace.appspot.com",
    messagingSenderId: "133400509977",
    appId: "1:133400509977:web:7fd927c86aaab923f63488",
    measurementId: "G-Y35VMS97EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:8000");
// export default app;

