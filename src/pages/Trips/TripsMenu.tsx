import Dropdown from 'react-bootstrap/Dropdown';
import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";
import {host} from "../../config";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import {useNavigate} from 'react-router-dom';
import ITrip from "../../models/tripInterface";

const TripsMenu: FC<ITrip> = ({id, houseAddress, houseName, checkOutDate, checkInDate, price, houseId, guestId}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookings = useSelector((state: any) => state.bookingReducer.bookings);
    const trips = useSelector((state: any) => state.bookingReducer.upcomingTrips);

    const cancelBooking = (bookingId: number) => {
        console.log(id, houseName);
        api.delete(`${host}/cancelBooking/${bookingId}`)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);

                /*const index = bookings.findIndex((booking: ITrip) => booking.id === bookingId);
                if (index !== -1) {
                    bookings.splice(index, 1);
                }*/
                const newTrips = trips.filter((booking: ITrip) => booking.id !== bookingId);

                dispatch(allActions.bookingActions.setUpcomingTrips(newTrips));
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