import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIpHS8s4XrV3Tvkn6x6McRyhafZwTG6nI",
  authDomain: "mobile-manufacturer.firebaseapp.com",
  projectId: "mobile-manufacturer",
  storageBucket: "mobile-manufacturer.appspot.com",
  messagingSenderId: "387952867493",
  appId: "1:387952867493:web:864c8c61ccc4fe460b354c",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
