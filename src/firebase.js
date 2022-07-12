// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8Rp9zi0V9Zh3zbi91gV8f-BNpdsfFD4",
  authDomain: "movies-app-353615.firebaseapp.com",
  projectId: "movies-app-353615",
  storageBucket: "movies-app-353615.appspot.com",
  messagingSenderId: "915263728899",
  appId: "1:915263728899:web:59ec0c714ec3ece5c10d36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
