import React, {FC, useState} from "react";
import Search from "../../components/Search/Search";
import {Link} from "react-router-dom";

const Home: FC = () => {
    return (
        <div className="home">
            <Search />
            <Link to="/houselist">
                <p>Show houses</p>
            </Link>
        </div>
    );
}

export default Home;