import { DO_LOGIN, GET_LOGGED_USER } from "./constants";



export const doLogin = (username, password) => {
    return {
        type: DO_LOGIN,
        username, password
    }
}


export const getLoggedUser = () => {
    return {
        type: GET_LOGGED_USER
    }
}