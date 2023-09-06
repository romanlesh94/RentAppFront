import React, {FC, useEffect, useState} from "react";
import Search from "../../components/Search/Search";
import axios from "axios";
import IHouse from "../../models/houseInterface";
import HouseCard from "../../components/HouseCard/HouseCard";
import {Pagination} from "react-bootstrap";
import {PaginationControl} from "react-bootstrap-pagination-control";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import Loader from "../../components/Loader/Loader";

const Home: FC = () => {
    const [houses, setHouses] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(3);
    const [activePage, setActivePage] = useState(1);

    const getHouses = () => {
        axios.get(`http://localhost:5001/getHouses/pageIndex/${activePage}/pageSize/${limit}`)
            .then(response => {
                setHouses(response.data.items);
                setTotalCount(response.data.totalCount);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
    }

    useEffect(() => {
        getHouses();
    });

    return (
        <div className="home">
            <Search />
            {
                houses.map((house: IHouse) =>
                    <HouseCard
                        name={house.name}
                        description={house.description}
                        rules={house.rules}
                        address={house.address}
                        price={house.price}
                    />
                )
            }
            <div className="pagination">
                <PaginationControl
                    total={totalCount}
                    limit={limit}
                    page={activePage}
                    changePage={(page) => {
                        setActivePage(page);
                    }}/>
            </div>
        </div>
    );
}

export default Home;