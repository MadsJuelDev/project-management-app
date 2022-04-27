import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCUxPjtMPDvdW0uiqqPIN3twQOJhtIGnKU",
  authDomain: "lama-project-management.firebaseapp.com",
  projectId: "lama-project-management",
  storageBucket: "lama-project-management.appspot.com",
  messagingSenderId: "13987705857",
  appId: "1:13987705857:web:d0f46e6e668cf155f13c00",
});

export { firebaseConfig as firebase };
