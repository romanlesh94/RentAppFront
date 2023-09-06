import {FC, useState} from "react";
import DatePicker from "react-datepicker";

const Enlist = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());

    return (
        <div className="search">
            <div className="search__container">
                <div className="search__bar">
                    <input type="text" className="search__input" placeholder="Where are you going?"/>
                    <div className="search__form-buttons">
                        <div className="search__form-button">
                            <DatePicker selected={checkInDate} onChange={(date:Date) => setCheckInDate(date)} />
                        </div>
                        {/*<button className="search__form-button search__check-in">Check in</button>*/}
                        <div className="search__form-button">
                            <DatePicker selected={checkOutDate} onChange={(date:Date) => setCheckOutDate(date)} />
                        </div>
                        {/*<button className="search__form-button search__check-out">Check out</button>*/}
                        <button className="search__form-button search__guests">Guests</button>
                        <button className="search__form-button search__button button-cta">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enlist;