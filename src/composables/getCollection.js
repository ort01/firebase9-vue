import { ref, watchEffect } from 'vue'

//firebase imports
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"

const getCollection = (colName) => {
    const documents = ref(null)

    //collection reference
    let colRef = collection(db, colName)

    //onSnapshot function returns towards another function (unSub) which we need to invoke if we want to unsubscribe from the real time listener.
    const unSub = onSnapshot(colRef, (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id })
        })

        //update values
        documents.value = results
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => {
            unSub()
        })
    })

    return { documents }
}

export default getCollection