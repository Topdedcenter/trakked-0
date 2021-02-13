  import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEABzFfI4acMKRwRBMcXccP27Cx00931E",
    authDomain: "trakked-739d9.firebaseapp.com",
    projectId: "trakked-739d9",
    storageBucket: "trakked-739d9.appspot.com",
    messagingSenderId: "288376515116",
    appId: "1:288376515116:web:8db213f269123fd8dd3f89"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;