import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB_DXG-N0XYiU5jqYypPdGGOeaIkGrEWLY",
    authDomain: "sandbox-e5144.firebaseapp.com",
    databaseURL: "https://sandbox-e5144.firebaseio.com",
    projectId: "sandbox-e5144",
    storageBucket: "sandbox-e5144.appspot.com",
    messagingSenderId: "585929912083"
};
firebase.initializeApp(config);

export const database = firebase.database()