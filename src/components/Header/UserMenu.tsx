import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faComment, faRightFromBracket, faSuitcase, faUserPen} from "@fortawesome/free-solid-svg-icons";

const UserMenu = () => {

    const name = useSelector((state: any) => state.userReducer.user.name);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(allActions.userActions.logOut());
    }

    return (
        <div>
            <Dropdown className="user-menu">
                <Dropdown.Toggle className="user-menu__button" variant="danger" id="dropdown-basic">
                    {name}
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-menu__dropdown">
                    <Dropdown.Item className="user-menu__item">
                        <FontAwesomeIcon icon={faUserPen} className="user-menu__icon"/>
                        Manage account
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <FontAwesomeIcon icon={faSuitcase} className="user-menu__icon"/>
                        Trips
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <FontAwesomeIcon icon={faComment} className="user-menu__icon"/>
                        Reviews
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <FontAwesomeIcon icon={faBookmark} className="user-menu__icon"/>
                        Saved
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logOut} className="user-menu__item">
                        <FontAwesomeIcon icon={faRightFromBracket} className="user-menu__icon"/>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserMenu;