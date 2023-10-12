import IBooking from "../../models/bookingInterface";
import ITrip from "../../models/tripInterface";

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
const setUpcomingTrips = (trips: Array<ITrip>) => {
    return {
        type: "SET_UPCOMING_TRIPS",
        payload: trips,
    }
}

export default {
    setBookings,
    setDates,
    setUpcomingTrips,
}