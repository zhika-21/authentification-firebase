import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBKTStIXHcFFOYoXx0VeHNgYXC2HRgWAMM",
    authDomain: "authentification-20a5e.firebaseapp.com",
    projectId: "authentification-20a5e",
    storageBucket: "authentification-20a5e.appspot.com",
    messagingSenderId: "681861598543",
    appId: "1:681861598543:web:1f00f95c12e27ee0a8093a",
    measurementId: "G-K3VD82PNSC"
  };
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)