import React, {FC} from "react";
import Search from "../../components/Search/Search";
import house01 from "../../assets/house01.jpg";
import house02 from "../../assets/house02.jpg";
import house03 from "../../assets/house03.jpg";
import {Carousel} from "react-bootstrap";

const HousePage: FC = () => {
    return (
        <div className="housepage">
            <Search />
            <div className="housepage__namebox">
                <h3 className="housepage__name">Central London Studio Flat </h3>
            </div>
            <div className="housepage__wrapper">



                <div className="housepage__container">
                    <Carousel className="housepage__carousel">
                        <Carousel.Item className="housepage__carousel-item">
                            <img src={house01} alt="housePhoto01" className="housepage__photo"/>
                        </Carousel.Item>
                        <Carousel.Item className="housepage__carousel-item">
                            <img src={house02} alt="housePhoto02" className="housepage__photo"/>
                        </Carousel.Item>
                        <Carousel.Item className="housepage__carousel-item">
                            <img src={house03} alt="housePhoto03" className="housepage__photo"/>
                        </Carousel.Item>
                    </Carousel>
                    <div className="housepage__booking">
                        <div className="housepage__highlights">
                            <p className="housepage__title">Property highlights</p>
                            <ul className="housepage__list">
                                <li className="housepage__list-item">Free Wi-Fi</li>
                                <li className="housepage__list-item">Pet friendly</li>
                                <li className="housepage__list-item">Non-smoking</li>
                                <li className="housepage__list-item">King-size bed</li>
                                <li className="housepage__list-item">Parking</li>
                            </ul>
                        </div>
                        <div className="housepage__breakfast">
                            <p className="housepage__title">Breakfast</p>
                            <p className="housepage__text">Continental breakfast is available. Vegan, gluten-free</p>
                        </div>
                        <div className="housepage__transfer">
                            <p className="housepage__title">Transfer</p>
                            <p className="housepage__text">Transfer from the airport is possible, but not included</p>
                        </div>
                        <button className="housepage__button button-cta">Book</button>
                    </div>
                </div>
                <div className="housepage__description">
                    <p className="housepage__description-text">
                        Located 1.3 km from Emirates Stadium, Maldron Hotel Finsbury Park, London offers 4-star accommodation in London and features a bar. Featuring a fitness centre, the 4-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation provides room service, and luggage storage for guests.  At the hotel, every room is equipped with a desk and a flat-screen TV. At Maldron Hotel Finsbury Park, London every room comes with bed linen and towels. Languages spoken at the reception include Arabic, English, Spanish and French
                    </p>
                </div>
                <div className="housepage__rules">
                    <p className="housepage__title">Rules</p>
                    <p className="housepage__description-text">
                        Check in is from 15.00, check-out is by 12.00 next morning. The house is pet-friendly. Smoking is not allowed. Children of any age are welcome. The minimum age for check-in is 18
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HousePage;