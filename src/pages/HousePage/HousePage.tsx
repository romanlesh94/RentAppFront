import React, {FC, useEffect} from "react";
import Search from "../../components/Search/Search";
import house01 from "../../assets/house01.jpg";
import house02 from "../../assets/house02.jpg";
import house03 from "../../assets/house03.jpg";
import {Carousel} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import IHouse from "../../models/houseInterface";

const HousePage: FC = () => {
    const navigate = useNavigate();
    const house: IHouse = useSelector((state: any) => state.houseReducer.selectedHouse);

    useEffect(() => {console.log(house)});

    return (
        <div className="housepage">
            <Search />
            <div className="housepage__namebox">
                <h3 className="housepage__name">{house.name}</h3>
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
                        <button onClick={() => {navigate("/booking")}} className="housepage__button button-cta">Book</button>
                    </div>
                </div>
                <div className="housepage__description">
                    <p className="housepage__description-text">{house.description}</p>
                </div>
                <div className="housepage__rules">
                    <p className="housepage__title">Rules</p>
                    <p className="housepage__description-text">{house.rules}</p>
                </div>
            </div>
        </div>
    )
}

export default HousePage;