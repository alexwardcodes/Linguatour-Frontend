import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBIebHvJ0aIRF5Z_e5cH58MEc_oZkkiOiA",
  authDomain: "linguatour-59817.firebaseapp.com",
  projectId: "linguatour-59817",
  storageBucket: "linguatour-59817.appspot.com",
  messagingSenderId: "901003638308",
  appId: "1:901003638308:web:efbf12658f6c52b8b14ab1",
  measurementId: "G-5V2Q6C5GL1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
