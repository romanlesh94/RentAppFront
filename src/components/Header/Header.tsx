import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import avatar from "../../assets/user-avatar.jpeg";

const Header = () => {

    const isLogged = useSelector((state: any) => state.userReducer.loggedIn);

    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    <div className="header__logo">
                        rent
                    </div>
                </Link>
                {
                    isLogged ?
                        <div className="header__user">
                            <UserMenu />
                            <img src={avatar} alt="user-photo" className="header__user-photo"/>
                        </div>
                    :
                        <div className="header__menu">
                            <Link to="/login">
                                <div className="header__menu-item header__login">
                                    Log in
                                </div>
                            </Link>
                            <Link to="/signup">
                                <div className="header__menu-item header__signup">
                                    Register
                                </div>
                            </Link>
                            <Link to="/enlist">
                                <div className="header__menu-item header__enlist-house">
                                    List your house
                                </div>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Header;