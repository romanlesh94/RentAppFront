import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import allActions from "../../redux/actions/allActions";
import {IUser} from "../../models/user";
import {useNavigate} from "react-router-dom";
import ISetCurrentUser from "../../models/setCurrentUserInterface";

const Signup: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
        email: '',
        country: '',
        phoneNumber: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        setValues((values) => ({
            ...values,
            [name]: value,
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
                const user: ISetCurrentUser = {
                    login: values.login,
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
                            onChange={handleInputChange}
                            name="email"
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
                            onChange={handleInputChange}
                            name="country"
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control
                            className="page__input page__input--telephone"
                            required
                            type="text"
                            placeholder="Enter your telephone number"
                            value={values.phoneNumber}
                            onChange={handleInputChange}
                            name="phoneNumber"
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
                            onChange={handleInputChange}
                            name="login"
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
                            onChange={handleInputChange}
                            name="password"
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default Signup;