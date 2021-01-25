import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9yfIqeh0ZbuSPWzomu-bjTMQwctan_LI",
    authDomain: "robinhood-218a0.firebaseapp.com",
    projectId: "robinhood-218a0",
    storageBucket: "robinhood-218a0.appspot.com",
    messagingSenderId: "598269319019",
    appId: "1:598269319019:web:f70e3363735c9109a25e2e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};




