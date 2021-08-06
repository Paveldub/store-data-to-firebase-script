const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyD9Pwe9YgJDJMo_0oELNuVMJMWT8N3S5EA",
  authDomain: "photo-mvp.firebaseapp.com",
  databaseURL: "https://photo-mvp-default-rtdb.firebaseio.com",
  projectId: "photo-mvp",
  storageBucket: "photo-mvp.appspot.com",
  messagingSenderId: "165238381929",
  appId: "1:165238381929:web:717f119dfa031af8e271f8"
})

const db = firebase.firestore();

const photosCollection = 