import {FC} from "react";

const Signup: FC = () => {
    return (
        <div className="page">
            <div className="page__container">
                <form className="page__form">
                    <h3 className="page__headline">Sign up</h3>
                    <label className="page__label">
                        <p className="page__label-text">Email</p>
                        <input
                            type="text"
                            className="page__input page__input--email"
                            placeholder="Enter your email"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Telephone</p>
                        <input
                            type="text"
                            className="page__input page__input--telephone"
                            placeholder="Enter your phone number"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Name</p>
                        <input
                            type="text"
                            className="page__input page__input--name"
                            placeholder="Enter your name"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Password</p>
                        <input
                            type="text"
                            className="page__input page__input--password"
                            placeholder="Enter your password"
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Password check</p>
                        <input
                            type="text"
                            className="page__input page__input--password-check"
                            placeholder="Enter your password again"
                        />
                    </label>
                    <button className="page__button button-cta">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;