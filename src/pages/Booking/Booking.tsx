import React, {FC, useEffect, useState} from "react";
import {Calendar} from "react-calendar";
import {useNavigate, useParams} from "react-router-dom";
import api from "../../services/api";
import {host} from "../../config";
import IBooking from "../../models/bookingInterface";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import IAddBooking from "../../models/addBookingInterface";

/*type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]*/

const Booking: FC = () => {

    const bookings = useSelector((state: any) => state.bookingReducer.bookings);
    const dates = useSelector((state: any) => state.bookingReducer.dates);
    const selectedHouse = useSelector((state: any) => state.houseReducer.selectedHouse);
    const dispatch = useDispatch();
    const params = useParams();
    const houseId = Number(params.id);

    const [value, onChange] = useState<any>(null);

    const navigate = useNavigate();
    const minDate = new Date();

    const getBookings = (id: number) => {
        api.get(`${host}/getHouseBookings?id=${id}`)
            .then(response => {
                dispatch(allActions.bookingActions.setBookings(response.data));
                const dates: Array<any> = [];
                response.data.forEach((b: IBooking) => {
                    const startDate = new Date(b.checkInDate);
                    const endDate = new Date(b.checkOutDate);
                    const options: any  = { timezone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' };

                    while (startDate < endDate) {
                        const formattedDate = startDate.toLocaleString('en-US', options).split('T')[0];
                        dates.push(formattedDate);
                        startDate.setDate(startDate.getDate() + 1);
                    }
                    //dates.push(b.checkInDate.split("T")[0])
                });
                dispatch(allActions.bookingActions.setDates(dates));
                console.log(dates);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            })
    }

    const isSameDay = (date1: Date, date2: Date) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        )
    }

    const isDateDisabled = (date: Date) => {
        return dates.some((d: any) =>
            isSameDay(new Date(d), date)
        )
    }

    const handleBookingSubmit = () => {
        debugger

        const options: any  = { timezone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' };

        const checkInDate = new Date(value[0]);
        const utcCheckInDate = checkInDate.toLocaleString('en-US', options);

        const checkOutDate = new Date(value[1]);
        const utcCheckOutDate = checkOutDate.toLocaleString('en-US', options);


        const booking: IAddBooking = {
            id: 0,
            houseId: houseId,
            guestId: 7,
            price: selectedHouse.price,
            checkInDate: utcCheckInDate,
            checkOutDate: utcCheckOutDate,
        }

        api.post(`${host}/addHouseBooking`, booking)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            })
            .catch(error => {
                console.error('Something went wrong!', error);
            });

        console.log(booking.checkInDate, booking.checkOutDate);

        navigate("/bookingSuccess");
    }

    useEffect(() => {
        getBookings(houseId);
    }, [value]);


    return (
        <div className="booking">
            <div className="booking__wrapper">
                <p className="booking__headline">Check your dates before you proceed with the booking</p>
                <div className="booking__content">
                    <div className="booking__calendar">
                        <Calendar
                            minDate={minDate}
                            minDetail="year"
                            maxDetail="month"
                            tileDisabled={({date}) => isDateDisabled(date)}
                            defaultActiveStartDate={minDate}
                            selectRange={true}
                            onChange={onChange}
                            value={value}
                            locale={"en-EN"}
                        />
                    </div>
                    <div className="booking__receipt-wrapper">
                        <div className="booking__receipt">
                            <div className="booking__dates">
                                <p className="booking__dates--title booking__title">Your dates</p>
                                <div className="booking__line">
                                    <p className="booking__prefix">Check in date:</p>
                                    <p className="booking__line-item">{dates[0]}</p>
                                </div>
                                <div className="booking__line">
                                    <p className="booking__prefix">Check out date:</p>
                                    <p className="booking__line-item">23.09.2023</p>
                                </div>
                            </div>
                            <div className="booking__price">
                                <p className="booking__price--title booking__title">Total price</p>
                                <div className="booking__line">
                                    <p className="booking__prefix">Price per night:</p>
                                    <p className="booking__line-item">65$</p>
                                </div>
                                <div className="booking__line">
                                    <p className="booking__prefix">Amount of nights:</p>
                                    <p className="booking__line-item">2</p>
                                </div>
                            </div>
                            <button onClick={handleBookingSubmit} className="booking__button button-cta">Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;

