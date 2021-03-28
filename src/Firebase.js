import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvj8MdHwMIKs6qyRENUSHSLC5FhvgrGE8",
    authDomain: "cyber-ecommercs.firebaseapp.com",
    projectId: "cyber-ecommercs",
    storageBucket: "cyber-ecommercs.appspot.com",
    messagingSenderId: "493417854501",
    appId: "1:493417854501:web:37524355725f0f62e571cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.googleAuthProvider()