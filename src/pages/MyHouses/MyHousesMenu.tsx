import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faComment, faPen,
    faRightFromBracket,
    faSuitcase,
    faTrash,
    faUserPen
} from "@fortawesome/free-solid-svg-icons";

const MyHousesMenu = () => {

    return (
        <div>
            <Dropdown className="user-menu">
                <Dropdown.Toggle className="user-menu__button" variant="danger" id="dropdown-basic">
                    Settings
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-menu__dropdown">
                    <Dropdown.Item className="user-menu__item">
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faPen} className="user-menu__icon"/>
                        </div>
                        Update house
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
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