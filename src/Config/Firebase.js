import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQznKdhfbud5whPyf4771TLDZ2BhIuACM",
    authDomain: "tugasmagang-1e753.firebaseapp.com",
    projectId: "tugasmagang-1e753",
    storageBucket: "tugasmagang-1e753.appspot.com",
    messagingSenderId: "800545853409",
    appId: "1:800545853409:web:ca512fa95ccb2b9d638ca0",
    measurementId: "G-ZMERDX668E"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

