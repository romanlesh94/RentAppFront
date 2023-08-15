import {FC} from "react";

const Login: FC = () => {
    return (
        <div className="page">
            <div className="page__container">
                <form className="page__form">
                    <h3 className="page__headline">Log in</h3>
                    <label className="page__label">
                        <p className="page__label-text">Email</p>
                        <input
                            type="text"
                            className="page__input page__input--email"
                            placeholder="Enter your email"
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
                    <button className="page__button button-cta">Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;