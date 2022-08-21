import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV34M2DXcIIVT9Dsfkn3QZcGBC1UzyVY8",
  authDomain: "test-app-fda51.firebaseapp.com",
  projectId: "test-app-fda51",
  storageBucket: "test-app-fda51.appspot.com",
  messagingSenderId: "610106724714",
  appId: "1:610106724714:web:89a281f1e764cd78989513",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
