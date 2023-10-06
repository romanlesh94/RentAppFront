import React, {FC, useEffect} from "react";
import Search from "../../components/Search/Search";
import axios from "axios";
import IHouse from "../../models/houseInterface";
import HouseCard from "../../components/HouseCard/HouseCard";
import {PaginationControl} from "react-bootstrap-pagination-control";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";
import api from "../../services/api";
import {host} from "../../config";

const Home: FC = () => {
    const activePage = useSelector((state: any) => state.houseReducer.activePage);
    const limit = useSelector((state: any) => state.houseReducer.limit);
    const city = useSelector((state: any) => state.houseReducer.city);
    const totalCount = useSelector((state: any) => state.houseReducer.totalCount);
    const houses = useSelector((state: any) => state.houseReducer.houses);
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);

    const dispatch = useDispatch();


    const getHouses = () => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(
            city ?
                `${host}/getHouses/pageIndex/${activePage}/pageSize/${limit}?City=${city}`
                :
                `${host}/getHouses/pageIndex/${activePage}/pageSize/${limit}`
        )
            .then(response => {
                console.log("getHouses");
                dispatch(allActions.houseActions.setHouses(response.data.items));
                dispatch(allActions.houseActions.setHousesTotalCount(response.data.totalCount));
                dispatch(allActions.loaderActions.hideLoader());
            })
            .catch(error => {
                console.error("Something went wrong", error);
                dispatch(allActions.loaderActions.hideLoader());
            });
    }

    const handleHouseClick = (clickedHouse: IHouse) => {
        dispatch(allActions.houseActions.setSelectedHouse(clickedHouse));
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getHouses();
    }, [activePage, city]);

    return (
        <div className="home">
            <Search />
            { isLoading ? <Loader /> : null }
            {
                houses.map((house: IHouse, index: number) =>
                    <Link to={`/housepage/id/${house.id}`} onClick={() => {handleHouseClick(house)}} key={index}>
                        <HouseCard
                            id={house.id}
                            name={house.name}
                            description={house.description}
                            rules={house.rules}
                            address={house.address}
                            price={house.price}
                        />
                    </Link>
                )
            }
            <div className="pagination">
                <PaginationControl
                    total={totalCount}
                    limit={limit}
                    page={activePage}
                    changePage={(page) => {
                        dispatch(allActions.houseActions.setActivePage(page));
                    }}/>
            </div>
        </div>
    );
}

export default Home;