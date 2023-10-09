import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {faEnvelope, faHouseChimney, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import api from "../../services/api";
import {host} from "../../config";
import IHouseOwner from "../../models/houseOwnerInterface";

const BookingSuccess = () => {
    const selectedHouse = useSelector((state: any) => state.houseReducer.selectedHouse);
    const navigate = useNavigate();
    const [owner, setOwner] = useState<IHouseOwner>();

    const getHouseOwner = (id: number) => {
        api.get(`${host}/getPerson/${id}`)
            .then(response => {
                setOwner(response.data);
            })
    }

    useEffect(() => {
        getHouseOwner(selectedHouse.ownerId);
    }, []);

    return (
        <div className="success">
            <div className="success__wrapper">
                <p className="success__title">You have successfully booked the house:</p>
                <div className="success__house">
                    <FontAwesomeIcon icon={faHouseChimney} className="success__house-icon"/>
                    <p className="success__house-name">{selectedHouse.name}</p>
                </div>
                <p className="success__text">The owner will contact you soon. If this doesn't happen, you can use this phone or email to get further information:</p>
                <div className="success__contacts">
                    <div className="success__owner success__info">
                        <FontAwesomeIcon icon={faUser} className="success__house-icon"/>
                        <p className="success__owner-name">{owner?.login}</p>
                    </div>
                    <div className="success__email success__info">
                        <FontAwesomeIcon icon={faEnvelope} className="success__house-icon"/>
                        <a href = "mailto:romanlesh94@gmail.com">{owner?.email}</a>
                    </div>
                    <div className="success__telephone success__info">
                        <FontAwesomeIcon icon={faPhone} className="success__house-icon"/>
                        <a href="tel:+375336320415">{owner?.phoneNumber}</a>
                    </div>
                </div>
                <button className="success__button button-cta" onClick={() => {navigate("/trips")}}>Go to my trips</button>
                <button className="success__button success__button--secondary" onClick={() => {navigate("/")}}>Go back</button>
            </div>
        </div>
    )
}

export default BookingSuccess;

