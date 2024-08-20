import { authKey } from "@/constants/storageKey"
import { decodeedToken } from "@/utills/jwt"
import { setToLocalStorage , getFromLocalStorage, removeFromLocalStorage} from "@/utills/local_storage"

export const storeUserInfo = ({accessToken}:{accessToken: string}) => {
   return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo = ()=> {
    const authToken = getFromLocalStorage(authKey)
    if(authToken){
        const decodedData = decodeedToken(authToken)
        return decodedData
    }else {
        return ""
    }
}


export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey)
    return !!authToken
}

export const logoutUser = (key: string) => {
    return removeFromLocalStorage(key)
}