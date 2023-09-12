import React, {FC} from "react";
import MyHousesMenu from "./MyHousesMenu";

const MyHouses: FC = () => {
    return (
        <div className="my-houses">
            <div className="my-house">
                <div className="my-house__info">
                    <p className="my-house__name">Almirante GuestHouse</p>
                    <p className="my-house__address">Avenida Almirante Reis, 108 1º Dto, Arroios, 1150-023 Lisbon, Portugal</p>
                </div>
                <div className="my-house__menu">
                    <MyHousesMenu />
                </div>
            </div>
        </div>
    )
}

export default MyHouses;