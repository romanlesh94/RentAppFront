import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";

const Login: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);

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
        axios.post('https://localhost:5001/log-in', values)
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
                    <h3 className="page__headline">Log in</h3>
                    <label className="page__label">
                        <p className="page__label-text">Login</p>
                        <input
                            type="text"
                            className="page__input page__input--email"
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
                    <input type="submit" className="page__button button-cta" value="Log in" />
                </form>
            </div>
        </div>
    );
}

export default Login;