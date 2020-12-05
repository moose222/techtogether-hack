const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_gvKM1TO-ULkEMj9x4VDINkK9RKWiAeI",
    authDomain: "techtogether-hack.firebaseapp.com",
    projectId: "techtogether-hack",
    storageBucket: "techtogether-hack.appspot.com",
    messagingSenderId: "455112843424",
    appId: "1:455112843424:web:d92891563e82cd74d569c5"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// export default db;
module.exports = db