import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS2Y2z-DeEdoFZMZj9P9tJ8JehXGmTI5M",
  authDomain: "best-buy-80fe4.firebaseapp.com",
  projectId: "best-buy-80fe4",
  storageBucket: "best-buy-80fe4.appspot.com", // Corrected the URL
  messagingSenderId: "262517007199",
  appId: "1:262517007199:web:f6175d9496a7a5d0a48cea",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
