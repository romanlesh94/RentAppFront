import {FC, useEffect, useState} from "react";
import Search from "../../components/Search/Search";
import axios from "axios";
import IHouse from "../../models/house-interface";
import HouseCard from "../../components/HouseCard/HouseCard";

const HouseList: FC = () => {
    const [houses, setHouses] = useState([]);

    const getHouses = () => {
        axios.get('https://localhost:5001/get-houses').then(response => {
            setHouses(response.data);
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
                    />
                )
            }
        </div>
    );
}

export default HouseList;