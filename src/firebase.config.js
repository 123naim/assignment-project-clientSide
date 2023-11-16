// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU1GH1kkRrtAWW3UXA_BPqrBU1p3ZzDi8",
  authDomain: "assignment-project-clientside.firebaseapp.com",
  projectId: "assignment-project-clientside",
  storageBucket: "assignment-project-clientside.appspot.com",
  messagingSenderId: "611359680175",
  appId: "1:611359680175:web:a05498b84685f887ae565a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;