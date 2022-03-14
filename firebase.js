// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NZCNCA0aXdJDGawwYqn0cyHmfAVu8OQ",
    authDomain: "twitter-clone-next-js-72195.firebaseapp.com",
    projectId: "twitter-clone-next-js-72195",
    storageBucket: "twitter-clone-next-js-72195.appspot.com",
    messagingSenderId: "401161695154",
    appId: "1:401161695154:web:108f80c3150ebb81edfeab"
  };
  
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
