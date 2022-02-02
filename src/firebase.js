import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyD6NsxhA4H5yfh5shGNfL84GbsCW4ynOus",
    authDomain: "mychat-74a52.firebaseapp.com",
    projectId: "mychat-74a52",
    storageBucket: "mychat-74a52.appspot.com",
    messagingSenderId: "732001129735",
    appId: "1:732001129735:web:c96ffaece43d6717a361a2"
  }).auth();