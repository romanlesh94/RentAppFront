import {FC} from "react";

const Enlist: FC = () => {
    return (
        <div className="page">
            <div className="page__container">
                <form className="page__form">
                    <h3 className="page__headline">Enlist your house</h3>
                    <label className="page__label">
                        <p className="page__label-text">Name</p>
                        <input
                            type="text"
                            className="page__input page__input--wide"
                            placeholder="Enter your house name"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Description</p>
                        <textarea
                            className="page__input page__textarea"
                            placeholder="Write a short description of your house"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Rules</p>
                        <textarea
                            className="page__input page__textarea"
                            placeholder="Specify some rules for your guests"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Address</p>
                        <input
                            type="text"
                            className="page__input page__input--wide"
                            placeholder="Enter your address"
                        />
                    </label>
                    <button className="page__button button-cta">Enlist</button>
                </form>
            </div>
        </div>
    );
}

export default Enlist;