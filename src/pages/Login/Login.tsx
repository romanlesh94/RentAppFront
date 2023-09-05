import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import IUser from "../../models/user";
import { useNavigate } from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const Login: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
    });
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const navigate = useNavigate();


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
        axios.post('http://localhost:5001/login', values)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                dispatch(allActions.loaderActions.hideLoader());
                const user: IUser = {
                    name: values.login,
                }
                dispatch(allActions.userActions.setUser(user));
                navigate("/");
            })
            .catch(error => {
                console.error('Something went wrong!', error);
                dispatch(allActions.loaderActions.hideLoader());
        });
        setValidated(true);
    }

    return (
        <div className="page">
            <div className="page__container">
                { isLoading ? <Loader /> : null }
                <Form noValidate validated={validated} className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Log in</h3>
                    <Form.Group controlId="validationCustom00">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="text"
                            placeholder="Enter your login"
                            value={values.login}
                            onChange={handleLoginInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom05">
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

export default Login;