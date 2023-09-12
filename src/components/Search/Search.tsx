import {ChangeEvent, FC, FormEvent, useState} from "react";
import DatePicker from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import axios, {all} from "axios";

const Enlist = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [city, setCity] = useState("");

    const dispatch = useDispatch();

    const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(allActions.houseActions.setCity(city));
        dispatch(allActions.houseActions.setActivePage(1));
    }

    return (
        <div className="search">
            <div className="search__container">
                <form className="search__bar" onSubmit={handleSubmit}>
                    <input type="text"
                           className="search__input"
                           placeholder="Where are you going?"
                           value={city}
                           onChange={handleCityInputChange}
                    />
                    <div className="search__form-buttons">
                        <div className="search__form-button">
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date:Date) => setCheckInDate(date)}
                            />
                        </div>
                        {/*<button className="search__form-button search__check-in">Check in</button>*/}
                        <div className="search__form-button">
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date:Date) => setCheckOutDate(date)}
                            />
                        </div>
                        {/*<button className="search__form-button search__check-out">Check out</button>*/}
                        <button className="search__form-button search__guests">Guests</button>
                        <input
                            type="submit"
                            value="Search"
                            className="search__form-button search__button button-cta">
                        </input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Enlist;