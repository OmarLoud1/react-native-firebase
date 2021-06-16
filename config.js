
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9sqyIFEuy_kY0lD17PCD4jDwA-SrvNto",
    authDomain: "bywapp-72402.firebaseapp.com",
    projectId: "bywapp-72402",
    storageBucket: "bywapp-72402.appspot.com",
    messagingSenderId: "99563039563",
    appId: "1:99563039563:web:c60663f46b95f85be996ce",
    measurementId: "G-65YR87MCSV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.6.7/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.6.7/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

 */
export { firebase };

