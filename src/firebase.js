import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDh3em6EBOzru9Hciuv5b4_2EJjiSzV8Q0",
  authDomain: "authentication-be8eb.firebaseapp.com",
  databaseURL: "https://authentication-be8eb.firebaseio.com",
  projectId: "authentication-be8eb",
  storageBucket: "",
  messagingSenderId: "455777256485",
  appId: "1:455777256485:web:d7b1d57447f8d7f58eebcc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
