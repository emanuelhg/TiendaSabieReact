    //importo firebase
import firebase from 'firebase/app'

    //importo firestore
import 'firebase/firestore'

    //importo firebase auth
const firebaseConfig = {
    apiKey: "AIzaSyAZs5OhZX44xN-2htXmeqGFowyGmHAwt3k",
    authDomain: "tienda-sabie.firebaseapp.com",
    projectId: "tienda-sabie",
    storageBucket: "tienda-sabie.appspot.com",
    messagingSenderId: "222286288399",
    appId: "1:222286288399:web:4627fe2f3da24be1e3f57a"
  }

    // Inicio Firebase
const app = firebase.initializeApp(firebaseConfig)

    // me traigo la referencia de firestore
export const firestore = firebase.firestore(app)