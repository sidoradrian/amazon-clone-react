import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBEAvKq5TSlhO8kIZ1bKjUoq-5JXKbh-W0",
    authDomain: "challenge-c21c2.firebaseapp.com",
    projectId: "challenge-c21c2",
    storageBucket: "challenge-c21c2.appspot.com",
    messagingSenderId: "603912159591",
    appId: "1:603912159591:web:ecf94b879913439f006fc2",
    measurementId: "G-JP3P7LQH20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };