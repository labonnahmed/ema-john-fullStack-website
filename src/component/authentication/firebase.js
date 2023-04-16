import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGRe6x_n3waNrbBFRikx_EZ9DDMPApUMs",
  authDomain: "ema-john-latest-b35a0.firebaseapp.com",
  projectId: "ema-john-latest-b35a0",
  storageBucket: "ema-john-latest-b35a0.appspot.com",
  messagingSenderId: "1092727607782",
  appId: "1:1092727607782:web:0599906648ff37ccc64627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;