import {FC, useState} from "react";

const Enlist: FC = () => {
    return (
        <div className="search">
            <div className="search__container">
                <div className="search__bar">
                    <input type="text" className="search__input" placeholder="Where are you going?"/>
                    <div className="search__form-buttons">
                        <button className="search__form-button search__check-in">Check in</button>
                        <button className="search__form-button search__check-out">Check out</button>
                        <button className="search__form-button search__guests">Guests</button>
                        <button className="search__form-button search__button button-cta">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enlist;