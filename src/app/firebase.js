import { initializeApp, getApps } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCg9iP_gBiQtyrL8wik4Xtw1xzHKmZayK0",
  authDomain: "stream-video-3f70b.firebaseapp.com",
  projectId: "stream-video-3f70b",
  storageBucket: "stream-video-3f70b.firebasestorage.app",
  messagingSenderId: "242703270852",
  appId: "1:242703270852:web:051c39344d73182f129a91",
  measurementId: "G-NXKEJ6NGFQ"
};


let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


export default firebaseApp;