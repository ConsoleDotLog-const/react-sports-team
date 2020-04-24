import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDqG_G_uTQ3eWi721a7oZyjzoY-66fazBk",
    authDomain: "m-city-61e55.firebaseapp.com",
    databaseURL: "https://m-city-61e55.firebaseio.com",
    projectId: "m-city-61e55",
    storageBucket: "m-city-61e55.appspot.com",
    messagingSenderId: "561653879435",
    appId: "1:561653879435:web:d980e1abd16cf6e68bfa8e",
    measurementId: "G-3WMM31C703"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');


 export {
     firebase,
     firebaseMatches,
     firebasePromotions,
     firebaseTeams,
     firebaseDB
 }