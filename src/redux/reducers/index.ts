import {combineReducers} from "redux";
import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";
import houseReducer from "./houseReducer";

const rootReducer = combineReducers({
    userReducer,
    loaderReducer,
    houseReducer,
})

export default rootReducer;