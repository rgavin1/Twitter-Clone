  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATyGGRn4ZxS7ytsbmRf8xLnuiBG-vAGHw",
    authDomain: "twitter-clone-a783d.firebaseapp.com",
    projectId: "twitter-clone-a783d",
    storageBucket: "twitter-clone-a783d.appspot.com",
    messagingSenderId: "449172069298",
    appId: "1:449172069298:web:481ec901b6a60f3572a2ab"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;