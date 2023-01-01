import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
export const firebaseConfig = {
  apiKey: 'AIzaSyDTsuOGC3uZs1ZvNBTE8bQsoRuZ4S88ODo',
  authDomain: 'authwithfirebaseandnode.firebaseapp.com',
  databaseURL: 'https://authwithfirebaseandnode-default-rtdb.firebaseio.com',
  projectId: 'authwithfirebaseandnode',
  storageBucket: 'authwithfirebaseandnode.appspot.com',
  messagingSenderId: '724828758260',
  appId: '1:724828758260:web:bf2abcaa99eec35a28fea1',
  measurementId: 'G-0X19KQPRCY',
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

