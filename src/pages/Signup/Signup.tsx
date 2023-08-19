import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";

const Signup: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
        email: '',
        country: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleCountryInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            country: event.target.value,
        }));
    };

    const handleLoginInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            login: event.target.value,
        }));
    };

    const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('https://localhost:5001/sign-up', values)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
        setSubmitted(true);
    }

    return (
        <div className="page">
            <div className="page__container">
                <form className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Sign up</h3>
                    <label className="page__label">
                        <p className="page__label-text">Email</p>
                        <input
                            type="text"
                            className="page__input page__input--email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleEmailInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Country</p>
                        <input
                            type="text"
                            className="page__input page__input--telephone"
                            placeholder="Enter your country"
                            value={values.country}
                            onChange={handleCountryInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Login</p>
                        <input
                            type="text"
                            className="page__input page__input--name"
                            placeholder="Enter your login"
                            value={values.login}
                            onChange={handleLoginInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Password</p>
                        <input
                            type="text"
                            className="page__input page__input--password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handlePasswordInputChange}
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
                    <input type="submit" className="page__button button-cta" value="Sign up" />
                </form>
            </div>
        </div>
    );
}

export default Signup;