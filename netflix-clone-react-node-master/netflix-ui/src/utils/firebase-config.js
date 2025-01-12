import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZfQhZyWLfOJIJ3442wWT-r_pvMaeYcpc",
  authDomain: "netflix-clone-d7a12.firebaseapp.com",
  projectId: "netflix-clone-d7a12",
  storageBucket: "netflix-clone-d7a12.firebasestorage.app",
  messagingSenderId: "617673362595",
  appId: "1:617673362595:web:68b9dc5ce5ec8f78658316",
  measurementId: "G-4GY4287CWW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);