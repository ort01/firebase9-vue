import { auth } from '../firebase/config'
import { signOut } from "firebase/auth"

const logOut = async () => {
    try {
        await signOut(auth)
        console.log("user logged out");
    } catch (err) {
        console.log(err.message);
    }

}

const useLogout = () => {
    return { logOut }
}

export default useLogout