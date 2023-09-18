import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import allActions from "../../redux/actions/allActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faComment,
    faHouseChimney,
    faRightFromBracket,
    faSuitcase,
    faUserPen
} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../../services/auth-service";

const UserMenu = () => {

    const name = useSelector((state: any) => state.userReducer.user.name);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        AuthService.logout();
        dispatch(allActions.userActions.logOut());
        navigate("/login");
    }

    return (
        <div>
            <Dropdown className="user-menu">
                <Dropdown.Toggle className="user-menu__button" variant="danger" id="dropdown-basic">
                    {name}
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-menu__dropdown">
                    <Dropdown.Item className="user-menu__item">
                        <Link to="/userUpdate" className="user-menu__link">
                            <div className="user-menu__icon-box">
                                <FontAwesomeIcon icon={faUserPen} className="user-menu__icon"/>
                            </div>
                            Manage account
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <Link to="/trips" className="user-menu__link">
                            <div className="user-menu__icon-box">
                                <FontAwesomeIcon icon={faSuitcase} className="user-menu__icon"/>
                            </div>
                            Trips
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <Link to="/myhouses" className="user-menu__link">
                            <div className="user-menu__icon-box">
                                <FontAwesomeIcon icon={faHouseChimney} className="user-menu__icon"/>
                            </div>
                            My houses
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faComment} className="user-menu__icon"/>
                        </div>
                        Reviews
                    </Dropdown.Item>
                    <Dropdown.Item className="user-menu__item">
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faBookmark} className="user-menu__icon"/>
                        </div>
                        Saved
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logOut} className="user-menu__item">
                        <div className="user-menu__icon-box">
                            <FontAwesomeIcon icon={faRightFromBracket} className="user-menu__icon"/>
                        </div>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserMenu;