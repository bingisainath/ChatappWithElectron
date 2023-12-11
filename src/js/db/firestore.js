// // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyryxDBPraK5FRnGEudWqCrDdSm4n0cyI",
//   authDomain: "electronchatapp-6a398.firebaseapp.com",
//   projectId: "electronchatapp-6a398",
//   storageBucket: "electronchatapp-6a398.appspot.com",
//   messagingSenderId: "349913407869",
//   appId: "1:349913407869:web:a36773ad1599da3d31ac14",
//   measurementId: "G-3V8QEVNDG2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
// const analytics = getAnalytics(app);

// export default db

import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export const { Timestamp } = firebase.firestore;

export default firebase.initializeApp(config).firestore();
