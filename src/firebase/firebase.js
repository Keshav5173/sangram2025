// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXvug6MRmwD4O8uuTG33tcJ-gI-_1YqWw",
  authDomain: "sangram2025-5db7c.firebaseapp.com",
  projectId: "sangram2025-5db7c",
  storageBucket: "sangram2025-5db7c.firebasestorage.app",
  messagingSenderId: "1052616113103",
  appId: "1:1052616113103:web:ded733f0963b17eb66b0ba",
  measurementId: "G-W2E3TZ1MZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app