import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = 
{
  apiKey: "AIzaSyCTUXmzkDQWHjLbbNx48oMDv7cyXn3E7z0",
  authDomain: "connectallofus-9ed3c.firebaseapp.com",
  databaseURL: "https://connectallofus-9ed3c-default-rtdb.firebaseio.com",
  projectId: "connectallofus-9ed3c",
  storageBucket: "connectallofus-9ed3c.appspot.com",
  messagingSenderId: "25202588981",
  appId: "1:25202588981:web:642ca065d72c6e6407a07c",
  measurementId: "G-655P6D1ST4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

export { auth, db };