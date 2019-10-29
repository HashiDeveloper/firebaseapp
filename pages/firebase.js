import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOGyz9-QBjAeMH2bgBWjkQMn2oeckcp30",
    authDomain: "fir-app-8b965.firebaseapp.com",
    databaseURL: "https://fir-app-8b965.firebaseio.com",
    projectId: "fir-app-8b965",
    storageBucket: "fir-app-8b965.appspot.com",
    messagingSenderId: "731210400281",
    appId: "1:731210400281:web:b0fc4da018b39d47b7a088"
};

firebase.initializeApp(firebaseConfig);
export default firebase;