import { ref } from "vue";

//firebase imports
import { auth } from "@/firebase/config"
import { onAuthStateChanged } from 'firebase/auth'
//onAuthStateChanged function fires a callback F whenever the state of authentication changes


const user = ref(auth.currentUser) //null or current user

//auth changes
onAuthStateChanged(auth, (currentUser) => {

    user.value = currentUser
})


const getUser = () => {
    return { user }
}



export default getUser