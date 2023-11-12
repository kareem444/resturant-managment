// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  CACHE_SIZE_UNLIMITED,
  getFirestore,
  initializeFirestore,
  persistentLocalCache
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCAFIh686DyXHVYjUam9baAZZn9zU_iGcE',
  authDomain: 'kareem-d106d.firebaseapp.com',
  projectId: 'kareem-d106d',
  storageBucket: 'kareem-d106d.appspot.com',
  messagingSenderId: '591180800282',
  appId: '1:591180800282:web:48ad9959bc758c08dbcca3',
  measurementId: 'G-VC39SEPC21'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firestoreDB = initializeFirestore(app, {
  localCache: persistentLocalCache({ 
    cacheSizeBytes: CACHE_SIZE_UNLIMITED 
    // cacheSizeBytes: 40 * 1000000 
  })
})
// Initialize Cloud Firestore and get a reference to the service
// export const firestoreDB = getFirestore(app)
