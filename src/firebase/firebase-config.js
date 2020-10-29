import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC864a0AYDSBay22woCH3_Sd2kXupx5_zM",
    authDomain: "react-journal-app-25c8d.firebaseapp.com",
    databaseURL: "https://react-journal-app-25c8d.firebaseio.com",
    projectId: "react-journal-app-25c8d",
    storageBucket: "react-journal-app-25c8d.appspot.com",
    messagingSenderId: "857125378937",
    appId: "1:857125378937:web:32737ea2e08f2dbcf1eda8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
