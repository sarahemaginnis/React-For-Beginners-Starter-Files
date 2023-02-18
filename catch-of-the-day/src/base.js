import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwz_VxkTVAWsjR9R15tE-G2SDbHkqSuw0",
    authDomain: "catch-of-the-day-sarah-maginni.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sarah-maginni-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

//this is a default export
export default base;