import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyoSuzf-RxC67VK-7_iu9CNEaktQmU3c8",
    authDomain: "fir-9-reading-list-9ed97.firebaseapp.com",
    projectId: "fir-9-reading-list-9ed97",
    storageBucket: "fir-9-reading-list-9ed97.appspot.com",
    messagingSenderId: "634798303598",
    appId: "1:634798303598:web:c77d9a622aa3d55b7c397f"
};

//initializing firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore() //firestore database
const auth = getAuth() //firebase authentication

export { db, auth }