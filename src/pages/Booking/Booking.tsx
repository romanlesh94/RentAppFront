import React from "react";
import {Calendar} from "react-calendar";

const Booking = () => {
    return (
        <div className="booking">
            <div className="booking__calendar">
                <p className="booking__title">Check your dates before you proceed with the booking</p>
                <Calendar />
            </div>
            <div className="booking__receipt">
                <div className="booking__dates">
                    <p className="booking__dates--title booking__title">Your dates</p>
                    <div className="booking__line">
                        <p className="booking__line-item booking__prefix">Check in date:</p>
                        <p className="booking__line-item">21.09.2023</p>
                    </div>
                    <div className="booking__line">
                        <p className="booking__line-item booking__prefix">Check out date:</p>
                        <p className="booking__line-item">23.09.2023</p>
                    </div>
                </div>
                <div className="booking__price">
                    <p className="booking__price--title booking__title">Total price</p>
                    <div className="booking__line">
                        <p className="booking__line-item booking__prefix">Price per night:</p>
                        <p className="booking__line-item">65$</p>
                    </div>
                    <div className="booking__line">
                        <p className="booking__line-item booking__prefix">Amount of nights:</p>
                        <p className="booking__line-item">2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;

