import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import api from "../../services/api";
import {host} from "../../config";
import ITrip from "../../models/tripInterface";
import TripsMenu from "./TripsMenu";
import {PaginationControl} from "react-bootstrap-pagination-control";

const TripsHistory: FC = () => {
    const dispatch = useDispatch();
    const trips = useSelector((state: any) => state.bookingReducer.upcomingTrips);
    const currentUserId = localStorage.getItem("id");
    const activePage = useSelector((state: any) => state.houseReducer.activePage);
    const limit = useSelector((state: any) => state.houseReducer.limit);
    const totalCount = useSelector((state: any) => state.houseReducer.totalCount);

    const getBookings = (id: number) => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(`${host}/getHistoryByGuest/${id}/pageIndex/${activePage}/pageSize/${limit}`)
            .then(response => {
                dispatch(allActions.bookingActions.setUpcomingTrips(response.data.items));
                dispatch(allActions.houseActions.setHousesTotalCount(response.data.totalCount));
                console.log(response.data);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
        dispatch(allActions.loaderActions.hideLoader());
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getBookings(Number(currentUserId));
    }, [activePage])

    return (
        <div className="trips">
            <p className="trips__page-title">Your booking history:</p>
            {
                trips.map((trip: ITrip, index: number) =>
                    <div className="trip" key={index}>
                        <div className="trip__date trip__date--checkin">
                            <p className="trip__title">Check-in date:</p>
                            <p className="trip__day">{trip.checkInDate.split("T")[0]}</p>
                        </div>
                        <div className="trip__date trip__date--checkout">
                            <p className="trip__title">Check-out date:</p>
                            <p className="trip__day">{trip.checkOutDate.split("T")[0]}</p>
                        </div>
                        <div className="trip__info">
                            <p className="trip__name">{trip.houseName}</p>
                            <p className="trip__address">{trip.houseAddress}</p>
                        </div>
                        <div className="trip__status">
                            <p className="trip__status-text">Booked</p>
                        </div>
                        {/*<div className="trip__menu">
                            <TripsMenu
                                id={trip.id}
                                houseId={trip.houseId}
                                guestId={trip.guestId}
                                price={trip.price}
                                checkInDate={trip.checkInDate}
                                checkOutDate={trip.checkOutDate}
                                houseName={trip.houseName}
                                houseAddress={trip.houseAddress}
                            />
                        </div>*/}
                    </div>
                )
            }
            <div className="pagination">
                <PaginationControl
                    total={totalCount}
                    limit={limit}
                    page={activePage}
                    changePage={(page) => {
                        dispatch(allActions.houseActions.setActivePage(page));
                    }}/>
            </div>
        </div>
    )
}

export default TripsHistory;