import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFu1OkXJekEcKBzJes6FT-GemTESWFXos",
  authDomain: "eldar-facebook.firebaseapp.com",
  projectId: "eldar-facebook",
  storageBucket: "eldar-facebook.appspot.com",
  messagingSenderId: "823065954010",
  appId: "1:823065954010:web:91d0bfc44e90eafb2787e3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
