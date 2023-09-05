import IUser from "../../models/user";

const setUser = (user: IUser) => {
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