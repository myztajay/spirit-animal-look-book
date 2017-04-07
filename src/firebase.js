import firebase from 'firebase';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyA8QDSgSySD_DVcektiRdKdsctxihV3ZiM",
   authDomain: "social-animals-3d6f0.firebaseapp.com",
   databaseURL: "https://social-animals-3d6f0.firebaseio.com",
   projectId: "social-animals-3d6f0",
   storageBucket: "social-animals-3d6f0.appspot.com",
   messagingSenderId: "987299797557"
 };
 firebase.initializeApp(config);
 
export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
