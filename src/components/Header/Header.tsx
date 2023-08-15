import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    <div className="header__logo">
                        <p>rent</p>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="header__login">
                        <p>Log in</p>
                    </div>
                </Link>
                <Link to="/signup">
                    <div className="header__signup">
                        <p>Register</p>
                    </div>
                </Link>
                <Link to="/enlist">
                    <div className="header__enlist-house">
                        <p>List your house</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;