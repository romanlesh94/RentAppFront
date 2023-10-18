import Dropdown from 'react-bootstrap/Dropdown';
import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";
import {host} from "../../config";
import IHouse from "../../models/houseInterface";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import {useNavigate} from 'react-router-dom';
import {all} from "axios";
import ITrip from "../../models/tripInterface";

const TripsMenu: FC<ITrip> = ({id, houseAddress, houseName, checkOutDate, checkInDate, price, houseId, guestId}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookings = useSelector((state: any) => state.bookingReducer.bookings)

    const cancelBooking = (bookingId: number) => {
        console.log(id, houseName);
        api.delete(`${host}/cancelBooking/${bookingId}`)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);

                const index = bookings.findIndex((booking: ITrip) => booking.id === bookingId);
                if (index !== -1) {
                    bookings.splice(index, 1);
                }
                dispatch(allActions.bookingActions.setUpcomingTrips(bookings));
            })
    }


    return (
        <div>
            <Dropdown className="user-menu">
                <Dropdown.Toggle className="user-menu__button" variant="danger" id="dropdown-basic">
                    Settings
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-menu__dropdown">
                    {/*<Dropdown.Item className="user-menu__item" >
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faPen} className="user-menu__icon"/>
                        </div>
                        Update house
                    </Dropdown.Item>*/}
                    <Dropdown.Item className="user-menu__item" onClick={() => cancelBooking(id)}>
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faTrash} className="user-menu__icon"/>
                        </div>
                        Cancel booking
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default TripsMenu;