import firebase from "firebase";
import "firebase/firestore";


//connessione db firebase con react 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMIpTeLvURzPP875YCIaUyriIU5634xA8",
    authDomain: "libreria-romanelli.firebaseapp.com",
    databaseURL: "https://libreria-romanelli.firebaseio.com",
    projectId: "libreria-romanelli",
    storageBucket: "libreria-romanelli.appspot.com",
    messagingSenderId: "933261962487",
    appId: "1:933261962487:web:7b11f2b7eb52b8932cf7f2",
    measurementId: "G-M3PHK52BLK",
});


const auth = firebase.auth();
const db = firebaseApp.firestore;

export { auth,db };
export default firebase;