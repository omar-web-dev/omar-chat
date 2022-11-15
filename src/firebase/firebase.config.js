// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP.apiKey,
//   authDomain: process.env.REACT_APP.authDomain,
//   projectId: process.env.REACT_APP.projectId,
//   storageBucket: process.env.REACT_APP.storageBucket,
//   messagingSenderId: process.env.REACT_APP.messagingSenderId,
//   appId: process.env.REACT_APP.appId
// };
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY7XE3VNHQL9pCGUnsvH_aj4LNVIg5aPU",
  authDomain: "omar-chat-web-dev.firebaseapp.com",
  projectId: "omar-chat-web-dev",
  storageBucket: "omar-chat-web-dev.appspot.com",
  messagingSenderId: "100172041993",
  appId: "1:100172041993:web:3dd5f6649ca31e4a97cdd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app