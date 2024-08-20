import { jwtDecode } from "jwt-decode"

export const decodeedToken = (token: string) => {
    return jwtDecode(token)
}