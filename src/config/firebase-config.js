import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJSinrEZzs5vaRq2BQcdXaBsI_pjrZ4Wc",
    authDomain: "socialmediaauth-8d5af.firebaseapp.com",
    projectId: "socialmediaauth-8d5af",
    storageBucket: "socialmediaauth-8d5af.appspot.com",
    messagingSenderId: "282599125255",
    appId: "1:282599125255:web:fd145981e9ef2d35d6d5a2"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;