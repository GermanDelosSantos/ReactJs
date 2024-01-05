// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhymg0c4Naim4P0LMVLUbarbsa5BQyCb8",
    authDomain: "videosusadosdatabase.firebaseapp.com",
    projectId: "videosusadosdatabase",
    storageBucket: "videosusadosdatabase.appspot.com",
    messagingSenderId: "927770206619",
    appId: "1:927770206619:web:b2645fb17f815fbdae413e",
    measurementId: "G-6X40HRC1WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore( app )
const analytics = getAnalytics(app);