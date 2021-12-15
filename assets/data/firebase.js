import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByDPtfteUAt_HOr-tEaUawvQQ813gdVr8",
  authDomain: "atlas-20a8c.firebaseapp.com",
  projectId: "atlas-20a8c",
  storageBucket: "atlas-20a8c.appspot.com",
  messagingSenderId: "764124638085",
  appId: "1:764124638085:web:942422a53a05f9b58532ec",
  measurementId: "G-6YFE7TEXBL"
};  

initializeApp(firebaseConfig);