// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCRshskHJYw-sIsRksApSVARARFJhYhcbo",
  // authDomain: "farmako-profile-website-b6d3a.firebaseapp.com",
  // projectId: "farmako-profile-website-b6d3a",
  // storageBucket: "farmako-profile-website-b6d3a.appspot.com",
  // messagingSenderId: "737235531971",
  // appId: "1:737235531971:web:79f96ed36c066e32de4a76"
};

const firebaseConfig2 = {
  // apiKey: "AIzaSyCnao9WGUgHKh9qtsVIdBVW_Vh8eZyldNk",
  // authDomain: "farmako-master.firebaseapp.com",
  // projectId: "farmako-master",
  // storageBucket: "farmako-master.appspot.com",
  // messagingSenderId: "992029051570",
  // appId: "1:992029051570:web:01af7ba43e04ac65a497ab",
  // measurementId: "G-643GXSZWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const app2 = initializeApp(firebaseConfig2,"secondary")
export const db = getFirestore(app);
export const db2 = getFirestore(app2);