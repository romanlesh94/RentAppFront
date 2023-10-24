import React, {FC, useEffect, useState} from "react";
import Search from "../../components/Search/Search";
import house01 from "../../assets/house01.jpg";
import house02 from "../../assets/house02.jpg";
import house03 from "../../assets/house03.jpg";
import {Carousel} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import IHouse from "../../models/houseInterface";
import api from "../../services/api";
import {host} from "../../config";
import allActions from "../../redux/actions/allActions";
import {all} from "axios";

const HousePage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const house: IHouse = useSelector((state: any) => state.houseReducer.selectedHouse);
    const properties = useSelector((state: any) => state.houseReducer.selectedHouseProperties);
    const houseImages = useSelector((state: any) => state.houseReducer.houseImages);

    const params = useParams();
    const houseId = Number(params.id);

    const getHouse = (id: number) => {
        api.get(`${host}/getHouse/id/${id}`)
            .then(response => {
                dispatch(allActions.houseActions.setSelectedHouse(response.data.house));
                dispatch(allActions.houseActions.setSelectedHouseProperties(response.data.properties));
            })
    }

    const getImages = (houseId: number) => {
        api.get(`${host}/getHouseImages/${houseId}`)
            .then(response => {
                dispatch(allActions.houseActions.setHouseImages(response.data));
            })
    }

    useEffect(() => {
        getHouse(houseId);
        getImages(houseId);
    }, []);


    return (
        <div className="housepage">
            <Search />
            <div className="housepage__namebox">
                <h3 className="housepage__name">{house.name}</h3>
            </div>
            <div className="housepage__wrapper">
                <div className="housepage__container">
                    <Carousel className="housepage__carousel">
                        {
                            houseImages.map((image: any, index: number) =>
                                <Carousel.Item className="housepage__carousel-item">
                                    <img src={image} alt={`housePhoto${index}`} className="housepage__photo" key={index}/>
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <div className="housepage__booking">
                        <div className="housepage__highlights">
                            <p className="housepage__title">Property highlights</p>
                            <ul className="housepage__list">
                                {
                                    properties.map((p:any, index:number) =>
                                        <li className="housepage__list-item" key={index}>{p.text}</li>
                                    )
                                }
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
                        <button onClick={() => {navigate(`/booking/id/${houseId}`)}} className="housepage__button button-cta">Book</button>
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