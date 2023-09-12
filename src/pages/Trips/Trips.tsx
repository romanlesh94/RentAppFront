import React, {FC} from "react";

const Trips: FC = () => {
    return (
        <div className="trips">
            <div className="trip">
                <div className="trip__date">
                    <p className="trip__day">21</p>
                    <p className="trip__month">September</p>
                    <p className="trip__year">2023</p>
                </div>
                <div className="trip__date">
                    <p className="trip__day">22</p>
                    <p className="trip__month">September</p>
                    <p className="trip__year">2023</p>
                </div>
                <div className="trip__info">
                    <p className="trip__name">Almirante GuestHouse</p>
                    <p className="trip__address">Avenida Almirante Reis, 108 1º Dto, Arroios, 1150-023 Lisbon, Portugal</p>
                </div>
                <div className="trip__status">
                    <p className="trip__status-text">Booked</p>
                </div>
            </div>
        </div>
    )
}

export default Trips;