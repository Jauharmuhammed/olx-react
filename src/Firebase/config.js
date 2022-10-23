import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDkrvpDddx79Dnd6aJ79auHdL9Oc4YatS8",
  authDomain: "olx-ii.firebaseapp.com",
  projectId: "olx-ii",
  storageBucket: "olx-ii.appspot.com",
  messagingSenderId: "960806491604",
  appId: "1:960806491604:web:9891d0970e6a163a5d7241",
  measurementId: "G-H25BNWXGE4"
};

export default firebase.initializeApp(firebaseConfig)