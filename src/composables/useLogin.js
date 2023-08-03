import { ref } from "vue";

//firebase imports
import { auth } from "@/firebase/config"
import { signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password) //importing the function that takes in 3 arguments - auth (getAuth()), email, password.

        if (!res) {
            throw new Error("Could not complete login")
        }

        error.value = null
        isPending.value = false

    } catch (err) {
        error.value = err.message
        isPending.value = false
    }
}

const useLogin = () => {
    return { error, isPending, login }
}



export default useLogin