import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoiQi4H-Yq1JBzQeIPqcCzsTGoLkzCsWw",
  authDomain: "chat-app-ecf9c.firebaseapp.com",
  projectId: "chat-app-ecf9c",
  storageBucket: "chat-app-ecf9c.appspot.com",
  messagingSenderId: "435872738120",
  appId: "1:435872738120:web:068033dc8616b6c5d1e17d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)