import { IUser } from "../../models/user"


/*export interface userStateProps {
    user: IUser | {};
    loggedIn: boolean;
}*/

const initialState = {
    user: {},
    loggedIn: false
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false,
            }
        default:
            return state
    }
}

export default userReducer;