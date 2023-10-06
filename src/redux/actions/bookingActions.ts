import IBooking from "../../models/bookingInterface";

const setBookings = (bookings: Array<IBooking>) => {
    return {
        type: "SET_BOOKINGS",
        payload: bookings,
    }
}
const setDates = (dates: Array<Date>) => {
    return {
        type: "SET_DATES",
        payload: dates,
    }
}

export default {
    setBookings,
    setDates
}