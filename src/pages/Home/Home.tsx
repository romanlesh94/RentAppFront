import React, {FC, useEffect} from "react";
import Search from "../../components/Search/Search";
import {AxiosRequestConfig} from "axios";
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
    const checkInDate = useSelector((state: any) => state.houseReducer.checkInDate);
    const checkOutDate = useSelector((state: any) => state.houseReducer.checkOutDate);
    const totalCount = useSelector((state: any) => state.houseReducer.totalCount);
    const houses = useSelector((state: any) => state.houseReducer.houses);
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);

    const dispatch = useDispatch();

    const getHouses = () => {
        dispatch(allActions.loaderActions.showLoader());

        console.log("Booking dates: " + checkInDate, checkOutDate)

        const params: Record<string, string> = {};
        if (city) {
            params['city'] = city;
        }
        if (checkInDate) {
            params['checkInDate'] = checkInDate;
        }
        if (checkOutDate) {
            params['checkOutDate'] = checkOutDate;
        }

        const config: AxiosRequestConfig = {
            params: Object.keys(params).length > 0 ? params : undefined,
        };

        api.get(`${host}/getHouses/pageIndex/${activePage}/pageSize/${limit}`, config)
            .then(response => {
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
    }, [activePage, city, checkInDate, checkOutDate]);

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
                            ownerId={house.ownerId}
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