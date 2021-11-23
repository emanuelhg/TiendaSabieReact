import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZs5OhZX44xN-2htXmeqGFowyGmHAwt3k",
    authDomain: "tienda-sabie.firebaseapp.com",
    projectId: "tienda-sabie",
    storageBucket: "tienda-sabie.appspot.com",
    messagingSenderId: "222286288399",
    appId: "1:222286288399:web:4627fe2f3da24be1e3f57a"
  }

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)