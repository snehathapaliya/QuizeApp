import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBf9_bqvIwKO-zbyTadRzzRrpy6f7kGcCI",
  authDomain: "quiz-a-f8dfd.firebaseapp.com",
  projectId: "quiz-a-f8dfd",
  storageBucket: "quiz-a-f8dfd.appspot.com",
  messagingSenderId: "887201544158",
  appId: "1:887201544158:web:1ebce7f11af26fc7da0f4f",
  measurementId: "G-FSXQ2PW9BJ"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export { auth };