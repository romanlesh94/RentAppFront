import Dropdown from 'react-bootstrap/Dropdown';
import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";
import {host} from "../../config";
import IHouse from "../../models/houseInterface";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import { useNavigate } from 'react-router-dom';
import {all} from "axios";

const MyHousesMenu: FC<IHouse> = ({name, description, address, rules, price, id, ownerId}) => {

    const dispatch = useDispatch();
    const houses = useSelector((state: any) => state.houseReducer.houses);
    const navigate = useNavigate();

    const deleteHouse = (houseId: number) => {
        api.delete(`${host}/deleteHouse/${houseId}`)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);

                const index = houses.findIndex((house: IHouse) => house.id === id);
                if (index !== -1) {
                    houses.splice(index, 1);
                }
                dispatch(allActions.houseActions.setHouses(houses));
            })
            .catch(error => {
                console.error('Something went wrong!', error);
            });
    }

    return (
        <div>
            <Dropdown className="user-menu">
                <Dropdown.Toggle className="user-menu__button" variant="danger" id="dropdown-basic">
                    Settings
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-menu__dropdown">
                    <Dropdown.Item className="user-menu__item" onClick={() => {
                        navigate(`/houseUpdate/id/${id}`);
                    }}>
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faPen} className="user-menu__icon"/>
                        </div>
                        Update house
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item" onClick={() => deleteHouse(id)}>
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faTrash} className="user-menu__icon"/>
                        </div>
                        Delete house
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default MyHousesMenu;