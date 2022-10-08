// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDNZNhOCvJEhV-ZuSXCvRDlBRLkGzWMCdY",
    authDomain: "music-project-22b7b.firebaseapp.com",
    projectId: "music-project-22b7b",
    storageBucket: "music-project-22b7b.appspot.com",
    messagingSenderId: "760512600311",
    appId: "1:760512600311:web:df02c4950a3fceeab0dbf2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
