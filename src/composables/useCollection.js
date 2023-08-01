
//firebase imports
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"


const useCollection = (colName) => {

    const colRef = collection(db, colName)

    const addDocument = async (object) => {
        await addDoc(colRef, object)
    }

    return { addDocument }
}

export default useCollection