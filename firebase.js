// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, browserLoclPersistence } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBenbVNQ6gXk_PrImxeVa9Qy4ZdRbNipPw',
  authDomain: 'whatsapp-df8c5.firebaseapp.com',
  projectId: 'whatsapp-df8c5',
  storageBucket: 'whatsapp-df8c5.appspot.com',
  messagingSenderId: '86568860322',
  appId: '1:86568860322:web:071c758f88c5df7a5275fb',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = initializeAuth(app, {
  persistence: browserLoclPersistence,
})

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
