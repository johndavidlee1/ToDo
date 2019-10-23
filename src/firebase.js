import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDwyexC4QFUP-MAMEgU460jGdupru07_jI",
  authDomain: "todo-9dc21.firebaseapp.com",
  databaseURL: "https://todo-9dc21.firebaseio.com",
  projectId: "todo-9dc21",
  storageBucket: "todo-9dc21.appspot.com",
  messagingSenderId: "315125689949",
  appId: "1:315125689949:web:60ea222dc1716a9a55a7b4",
  measurementId: "G-YTDCV0EEBH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
