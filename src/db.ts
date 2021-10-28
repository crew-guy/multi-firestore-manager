// Import the functions you need from the SDKs you need
// Link to docs -> https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9
// Link to have 2 firebase apps initialised from same server - https://firebase.google.com/docs/projects/multiprojects#web

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnao9WGUgHKh9qtsVIdBVW_Vh8eZyldNk",
  authDomain: "farmako-master.firebaseapp.com",
  projectId: "farmako-master",
  storageBucket: "farmako-master.appspot.com",
  messagingSenderId: "992029051570",
  appId: "1:992029051570:web:01af7ba43e04ac65a497ab",
  measurementId: "G-643GXSZWWR"
};

const firebaseConfig2 = {
  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: "",
  // measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const app2 = initializeApp(firebaseConfig2,"secondary")
export const db = getFirestore(app);
// export const db2 = getFirestore(app2);