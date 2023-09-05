import {FC, useEffect, useState} from "react";
import Search from "../../components/Search/Search";
import axios from "axios";
import IHouse from "../../models/houseInterface";
import HouseCard from "../../components/HouseCard/HouseCard";

const HouseList: FC = () => {
    const [houses, setHouses] = useState([]);

    const getHouses = () => {
        axios.get('http://localhost:5001/getHouses/pageIndex/1/pageSize/15').then(response => {
            setHouses(response.data.items);
        }).catch(error => {
            console.error("Something went wrong", error);
        });
    }

    useEffect(() => {
        getHouses();
    });

    return (
        <div className="houselist">
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
        </div>
    );
}

export default HouseList;