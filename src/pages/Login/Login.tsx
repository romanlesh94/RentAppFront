import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import { useNavigate } from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import AuthService from "../../services/auth-service";
import {IUser} from "../../models/user";

const Login: FC = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
    });
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
        AuthService.login(values.login, values.password).then(
            () => {
                dispatch(allActions.loaderActions.hideLoader());
                const user: IUser = {
                    name: values.login,
                }
                dispatch(allActions.userActions.setUser(user));
                navigate("/");
            }
        );
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
                            name="login"
                            onChange={handleInputChange}
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
                            name="password"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;