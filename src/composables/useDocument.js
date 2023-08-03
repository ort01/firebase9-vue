//firebase imports
import { db } from "../firebase/config"
import { doc, deleteDoc, updateDoc } from "firebase/firestore"

const useDocuments = (colName) => {

    const deleteDocument = async (docID) => {
        const docRef = doc(db, colName, docID)
        await deleteDoc(docRef)
    }


    const updateDocument = async (docID, updates) => {
        const docRef = doc(db, colName, docID)
        await updateDoc(docRef, updates)
    }

    return { deleteDocument, updateDocument }

}

export default useDocuments