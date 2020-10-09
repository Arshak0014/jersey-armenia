import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBhjTxpaGyz3TGS3WwMK7unG4PUWUZa1Vc",
    authDomain: "jersey-armenia-1414a0.firebaseapp.com",
    databaseURL: "https://jersey-armenia-1414a0.firebaseio.com",
    projectId: "jersey-armenia-1414a0",
    storageBucket: "jersey-armenia-1414a0.appspot.com",
    messagingSenderId: "639886009826",
    appId: "1:639886009826:web:db0416d6062d3108e245bb",
    measurementId: "G-6KTMFEV3Y0"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseJerseys = firebaseDB.ref('jerseys');

export {
    firebase,
    firebaseJerseys,
    firebaseDB
}