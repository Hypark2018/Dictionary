import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyBnJQ4KATmWWdWomZN121QExWWY1zOnDPU",
        authDomain: "word-dictionary-bdb91.firebaseapp.com",
        projectId: "word-dictionary-bdb91",
        storageBucket: "word-dictionary-bdb91.appspot.com",
        messagingSenderId: "230517943275",
        appId: "1:230517943275:web:0a89929b7e9452dc1fc7ae",
        measurementId: "G-CL8WNSWWCG"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};


