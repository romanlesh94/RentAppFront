import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import allActions from "../../redux/actions/allActions";
import IUser from "../../models/user";
import {useNavigate} from "react-router-dom";

const Signup: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
        email: '',
        country: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const navigate = useNavigate();

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
        dispatch(allActions.loaderActions.showLoader());
        axios.post('http://localhost:5001/signup', values)
            .then(response => {
                dispatch(allActions.loaderActions.hideLoader());
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                const user: IUser = {
                    name: values.login,
                }
                dispatch(allActions.userActions.setUser(user));
                navigate("/");
            })
            .catch(error => {
                dispatch(allActions.loaderActions.hideLoader());
                console.error('Something went wrong!', error);
        });
        setValidated(true);
        setSubmitted(true);
    }

    return (
        <div className="page">
            <div className="page__container">
                { isLoading ? <Loader /> : null }
                <Form noValidate validated={validated} className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Sign up</h3>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleEmailInputChange}

                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            className="page__input page__input--telephone"
                            required
                            type="text"
                            placeholder="Enter your country"
                            value={values.country}
                            onChange={handleCountryInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom03">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            className="page__input page__input--name"
                            required
                            type="text"
                            placeholder="Enter your login"
                            value={values.login}
                            onChange={handleLoginInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="page__input page__input--password-check"
                            required
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handlePasswordInputChange}
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default Signup;