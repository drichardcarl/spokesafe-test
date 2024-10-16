import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArXsXTlSxgVaERO8GunzmXWMygGnVmSbk",
  authDomain: "spokesafe-reservation-db.firebaseapp.com",
  projectId: "spokesafe-reservation-db",
  storageBucket: "spokesafe-reservation-db.appspot.com",
  messagingSenderId: "516931815301",
  appId: "1:516931815301:web:1d523c6a6efcaeddd866ec",
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
