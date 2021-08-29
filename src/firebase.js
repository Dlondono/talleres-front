import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "mascotas-3c0f1.firebaseapp.com",
    projectId: "mascotas-3c0f1",
    storageBucket: "mascotas-3c0f1.appspot.com",
    messagingSenderId: "640981596346",
    appId: "",
    measurementId: "G-0MK49SKR6H"   
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);