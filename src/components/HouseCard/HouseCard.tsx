import {FC, useState} from "react";
import IHouse from "../../models/houseInterface";
import avatar from "../../assets/house-avatar.jpg";

const HouseCard: FC<IHouse> = ({name, description, address, rules, price}) => {
    return (
        <div className="housecard">
            <div className="housecard__wrapper">
                <div className="housecard__image-wrapper">
                    <img src={avatar} alt="house-photo" className="housecard__image"/>
                </div>
                <div className="housecard__info">
                    <h3 className="housecard__name">{name}</h3>
                    <p className="housecard__address">{address}</p>
                    <p className="housecard__description">{description}</p>
                </div>
                <div className="housecard__price-tag">
                    <p className="housecard__price">{price}</p>
                    <div className="housecard__currency">Dollars</div>
                </div>
            </div>
        </div>
    );
}

export default HouseCard;