import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARiwPeoQvkOVTSu3EE100W1MRMore-wB8",
  authDomain: "prathmesh-portfoilo.firebaseapp.com",
  projectId: "prathmesh-portfoilo",
  storageBucket: "prathmesh-portfoilo.appspot.com",
  messagingSenderId: "824880255437",
  appId: "1:824880255437:web:0034b35cc665f5376d3484",
  measurementId: "G-QFG4R1CHW9",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore();