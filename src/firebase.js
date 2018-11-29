import firebase from 'firebase';

const  config = {
  apiKey: "AIzaSyAoaWx7A34pH5EfmFgwln2x4nN11JVeQvQ",
  authDomain: "lunch-rush-119.firebaseapp.com",
  databaseURL: "https://lunch-rush-119.firebaseio.com",
  projectId: "lunch-rush-119",
  storageBucket: "lunch-rush-119.appspot.com",
  messagingSenderId: "194012925431"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
