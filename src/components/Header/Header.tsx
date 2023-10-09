import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import avatar from "../../assets/user-avatar.jpeg";
import api from "../../services/api";
import {host} from "../../config";
import allActions from "../../redux/actions/allActions";

const Header = () => {

    const isLogged = useSelector((state: any) => state.userReducer.loggedIn);
    const dispatch = useDispatch();
    const currentUserID = localStorage.getItem("id");
    const currentUser = useSelector((state: any) => state.userReducer.user);


    const getCurrentUser = (id: number) => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(`${host}/getPerson/${id}`)
            .then(response => {
                dispatch(allActions.userActions.setUser(response.data));
                console.log(response.data);
                console.log(currentUser);
            })
            .catch(error => {
                console.error("Something went wrong", error);
                dispatch(allActions.loaderActions.hideLoader());
            })
    }

    useEffect(() => {
        getCurrentUser(Number(currentUserID));
    }, []);

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
                        </div>
                }
            </div>
        </div>
    )
}

export default Header;