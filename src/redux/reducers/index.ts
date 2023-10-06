import {combineReducers} from "redux";
import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";
import houseReducer from "./houseReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
    userReducer,
    loaderReducer,
    houseReducer,
    bookingReducer
})

export default rootReducer;