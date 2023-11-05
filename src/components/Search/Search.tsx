import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import allActions from "../../redux/actions/allActions";
import {Calendar} from "react-calendar";
import {DropdownButton} from "react-bootstrap";

const Search = () => {
    const [checkInDate, setCheckInDate] = useState<any>(null);
    const [checkOutDate, setCheckOutDate] = useState<any>(null);
    const [city, setCity] = useState("");

    let minCheckOutDate = new Date(checkInDate);
    minCheckOutDate.setDate(checkInDate?.getDate() + 1);
    const options: any = {timezone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric'};

    const dispatch = useDispatch();

    const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(allActions.houseActions.setCity(city));

        const utcCheckInDate = checkInDate?.toLocaleString('en-US', options);
        const utcCheckOutDate = checkOutDate?.toLocaleString('en-US', options);

        dispatch(allActions.houseActions.setCheckInDate(utcCheckInDate));
        dispatch(allActions.houseActions.setCheckOutDate(utcCheckOutDate));

        dispatch(allActions.houseActions.setActivePage(1));
        console.log(utcCheckInDate, utcCheckOutDate);
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
                            <DropdownButton
                                variant="success"
                                id="search__dropdown-basic"
                                title={checkInDate ? checkInDate.toLocaleString('en-US', options) : "Check In"}
                            >
                                <Calendar
                                    minDetail="year"
                                    minDate={new Date()}
                                    maxDetail="month"
                                    selectRange={false}
                                    onChange={setCheckInDate}
                                    value={checkInDate}
                                    locale={"en-EN"}
                                />
                            </DropdownButton>
                        </div>
                        <div className="search__form-button">
                            <DropdownButton
                                variant="success"
                                id="search__dropdown-basic"
                                title={checkOutDate ? checkOutDate.toLocaleString('en-US', options) : "Check Out"}
                                disabled={checkInDate == null ? true : false}
                            >
                                <Calendar
                                    minDetail="year"
                                    maxDetail="month"
                                    minDate={minCheckOutDate ? minCheckOutDate : undefined}
                                    selectRange={false}
                                    onChange={setCheckOutDate}
                                    value={checkOutDate}
                                    locale={"en-EN"}
                                />
                            </DropdownButton>
                        </div>
                        {/*<button className="search__form-button search__guests">Guests</button>*/}
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

export default Search;