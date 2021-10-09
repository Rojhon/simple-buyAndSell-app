const firebase = require("firebase/compat/app");
require("firebase/compat/database");
// import { getAnalytics } from "firebase/compat/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD83Xcd_RDN-UAT9-S_Dhk4nkj1GrVqwKw",
    authDomain: "buy-and-sell-d9fe3.firebaseapp.com",
    projectId: "buy-and-sell-d9fe3",
    storageBucket: "buy-and-sell-d9fe3.appspot.com",
    messagingSenderId: "224668669620",
    appId: "1:224668669620:web:da09941eda60538a6269e1",
    measurementId: "G-GYKFRP2EYP"
};

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = firebase;
