import React from "react";
import {useNavigate} from "react-router-dom";
import {faEnvelope, faHouseChimney, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BookingSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className="success">
            <div className="success__wrapper">
                <p className="success__title">You have successfully booked the house:</p>
                <div className="success__house">
                    <FontAwesomeIcon icon={faHouseChimney} className="success__house-icon"/>
                    <p className="success__house-name">Almirante GuestHouse</p>
                </div>
                <p className="success__text">The owner will contact you soon. If this doesn't happen, you can use this phone or email to get further information:</p>
                <div className="success__contacts">
                    <div className="success__owner success__info">
                        <FontAwesomeIcon icon={faUser} className="success__house-icon"/>
                        <p className="success__owner-name">Raman Liashneuski</p>
                    </div>
                    <div className="success__email success__info">
                        <FontAwesomeIcon icon={faEnvelope} className="success__house-icon"/>
                        <a href = "mailto:romanlesh94@gmail.com">romanlesh94@gmail.com</a>
                    </div>
                    <div className="success__telephone success__info">
                        <FontAwesomeIcon icon={faPhone} className="success__house-icon"/>
                        <a href="tel:+375336320415">+375336320415</a>
                    </div>
                </div>
                <button className="success__button button-cta" onClick={() => {navigate("/trips")}}>Go to my trips</button>
                <button className="success__button success__button--secondary" onClick={() => {navigate("/")}}>Go back</button>
            </div>
        </div>
    )
}

export default BookingSuccess;

