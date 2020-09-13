import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB9kC_u29EplZ0J3ghiyaOrHxW70VoyYJE",
        authDomain: "storefront-a6487.firebaseapp.com",
        databaseURL: "https://storefront-a6487.firebaseio.com",
        projectId: "storefront-a6487",
        storageBucket: "storefront-a6487.appspot.com",
        messagingSenderId: "335540574373",
        appId: "1:335540574373:web:2f640028f0440401bbd54c",
        measurementId: "G-MX5KP10ZES"
    
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };