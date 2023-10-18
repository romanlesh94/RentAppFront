import React, {FC, useEffect} from "react";
import MyHousesMenu from "./MyHousesMenu";
import {useDispatch, useSelector} from "react-redux";
import api from "../../services/api";
import {host} from "../../config";
import allActions from "../../redux/actions/allActions";
import IHouse from "../../models/houseInterface";
import HouseCard from "../../components/HouseCard/HouseCard";

const MyHouses: FC = () => {
    const dispatch = useDispatch();
    const houses = useSelector((state: any) => state.houseReducer.houses);
    const currentUserId = localStorage.getItem("id");

    const getHouses = (id: number) => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(`${host}/getHousesByOwner/${id}`)
            .then(response => {
                dispatch(allActions.houseActions.setHouses(response.data));
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
        dispatch(allActions.loaderActions.hideLoader());
    }

    useEffect(() => {
        getHouses(Number(currentUserId))
    }, []);

    return (
        <div className="my-houses">
            <p className="my-houses__title">Your houses:</p>
            {
                houses.map((house: IHouse, index: number) =>
                    <div className="my-house" key={index}>
                        <div className="my-house__info">
                            <p className="my-house__name">{house.name}</p>
                            <p className="my-house__address">{house.address}</p>
                        </div>
                        <div className="my-house__menu">
                            <MyHousesMenu
                                id={house.id}
                                name={house.name}
                                description={house.description}
                                rules={house.rules}
                                address={house.address}
                                price={house.price}
                                ownerId={house.ownerId}
                            />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default MyHouses;