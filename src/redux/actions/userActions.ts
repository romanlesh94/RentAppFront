import {IUser} from "../../models/user";
import ISetCurrentUser from "../../models/setCurrentUserInterface";

const setUser = (user: ISetCurrentUser) => {
    return {
        type: "SET_USER",
        payload: user,
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT",
    }
}

export default {
    setUser,
    logOut
}