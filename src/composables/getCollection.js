import { ref, watchEffect } from 'vue'

//firebase imports
import { db } from "../firebase/config"
import { collection, onSnapshot, query, where } from "firebase/firestore"

const getCollection = (colName, queryCondition) => {
    const documents = ref(null)

    //collection reference
    let colRef = collection(db, colName) //before => firebase.firestore().collection(collectionName)
    //1 argument - passing in the db, so it knows which DB to connect to
    //2 argument - collection name

    if (queryCondition) {
        colRef = query(colRef, where(...queryCondition))
    }
    //query is a condition for showing data - you put in 3 arguments and it will show the data that match that condition(defined by arguments)
    //this is gonna show only the data from the colRef where "userID"(property on data object), "=="(matches), "user.value.uid"(uid on user object)


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