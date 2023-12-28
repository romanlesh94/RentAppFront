import React, {FC, useEffect} from "react";
import MyHousesMenu from "./MyHousesMenu";
import {useDispatch, useSelector} from "react-redux";
import api from "../../services/api";
import {host} from "../../config";
import allActions from "../../redux/actions/allActions";
import IHouse from "../../models/houseInterface";
import {Link} from "react-router-dom";
import {PaginationControl} from "react-bootstrap-pagination-control";

const MyHouses: FC = () => {
    const dispatch = useDispatch();
    const houses = useSelector((state: any) => state.houseReducer.houses);
    const currentUserId = sessionStorage.getItem("id");
    const activePage = useSelector((state: any) => state.houseReducer.activePage);
    const limit = useSelector((state: any) => state.houseReducer.limit);
    const totalCount = useSelector((state: any) => state.houseReducer.totalCount);

    const getHouses = (id: number) => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(`${host}/getHousesByOwner/${id}/pageIndex/${activePage}/pageSize/${limit}`)
            .then(response => {
                dispatch(allActions.houseActions.setHouses(response.data.items));
                dispatch(allActions.houseActions.setHousesTotalCount(response.data.totalCount));
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
        dispatch(allActions.loaderActions.hideLoader());
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getHouses(Number(currentUserId))
    }, [activePage]);

    return (
        <div className="my-houses">
            <p className="my-houses__title">Your houses:</p>
            {
                houses.map((house: IHouse, index: number) =>
                    <div className="my-house" key={index}>
                        <div className="my-house__info">
                            <Link to={`/housepage/id/${house.id}`}>
                                <p className="my-house__name">{house.name}</p>
                            </Link>
                            <p className="my-house__address">{house.address}</p>
                        </div>
                        <div className="my-house__menu">
                            <MyHousesMenu
                                id={house.id}
                                name={house.name}
                                description={house.description}
                                rules={house.rules}
                                address={house.address}
                                price={house.price}
                                ownerId={house.ownerId}
                            />
                        </div>
                    </div>
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
    )
}

export default MyHouses;