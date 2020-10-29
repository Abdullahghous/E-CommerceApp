import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwk9_aQi155SIK8QKr__mub4llXab6OxQ",
    authDomain: "e-commerce-ad237.firebaseapp.com",
    databaseURL: "https://e-commerce-ad237.firebaseio.com",
    projectId: "e-commerce-ad237",
    storageBucket: "e-commerce-ad237.appspot.com",
    messagingSenderId: "534213231309",
    appId: "1:534213231309:web:050c955c29a0867e905f84"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };