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

const userCollection = [
  {
    "id": 1,
    "photo_url": "https://i.ibb.co/YNYxnJm/119950000016.jpg"
  },
  {
    "id": 2,
    "photo_url": "https://i.ibb.co/G9vQkjc/119950000019.jpg"
  },
  {
    "id": 3,
    "photo_url": "https://i.ibb.co/xD5RH2z/119950000015.jpg"
  }
]


userCollection.forEach(function(obj) => {
  db.collection('myCollection').add({
    id = item.id,
    photo_url = item.photo_url
  })
})
