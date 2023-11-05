
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoDdobI_wBk3dJ13lV2kaLS2Q3xMdwW4g",
  authDomain: "expense-tracker-10afa.firebaseapp.com",
  projectId: "expense-tracker-10afa",
  storageBucket: "expense-tracker-10afa.appspot.com",
  messagingSenderId: "536300071812",
  appId: "1:536300071812:web:84e8be2e6dc36b46cb8bd1",
  measurementId: "G-Q727MZT5L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)