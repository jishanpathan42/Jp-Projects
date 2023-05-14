
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHieeSdqAkwc3M604ilZQSPzlCEqiMiVQ",
    authDomain: "listed-fans-73273.firebaseapp.com",
    projectId: "listed-fans-73273",
    storageBucket: "listed-fans-73273.appspot.com",
    messagingSenderId: "455559545748",
    appId: "1:455559545748:web:b5e5c90c75c44267b64581"
  };

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp)

export {auth,db};