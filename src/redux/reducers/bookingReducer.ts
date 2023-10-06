import IBooking from "../../models/bookingInterface";

let initialState = {
    bookings: [],
    dates: [],
}

const bookingReducer = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_BOOKINGS":
            return {
                ...state,
                bookings: action.payload,
            }
        case "SET_DATES":
            return {
                ...state,
                dates: action.payload,
            }
        default:
            return state
    }
}

export default bookingReducer;