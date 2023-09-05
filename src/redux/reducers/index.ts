import {combineReducers} from "redux";
import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
    userReducer,
    loaderReducer
})

export default rootReducer;