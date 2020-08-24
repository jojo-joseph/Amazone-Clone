import firebase from "firebase";


const firebaseApp= firebase.initializeApp({
   //add firebase config 
   
});


const auth = firebase.auth();

export { auth };

