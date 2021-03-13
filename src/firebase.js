import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYNAJixuMr42itIuSBeCD-YepnygCStOQ",
    authDomain: "instagram-clone-5a9ab.firebaseapp.com",
    projectId: "instagram-clone-5a9ab",
    storageBucket: "instagram-clone-5a9ab.appspot.com",
    messagingSenderId: "148879944919",
    appId: "1:148879944919:web:94f86fb740900e626ed492",
    measurementId: "G-SL138HLFGY"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}