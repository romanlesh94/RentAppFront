import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../redux/actions/allActions";
import {useNavigate} from "react-router-dom";

const UserUpdate = () => {

    const [validated, setValidated] = useState(false);
    const user = useSelector((state: any) => state.userReducer.user);
    const [values, setValues] = useState({
        login: '',
        password: '',
        email: '',
        country: '',
        phoneNumber: '',
    });
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setValues((values) => ({
            ...values,
            login: user.login,
            email: user.email,
            country: user.country,
            phoneNumber: user.phoneNumber
        }));
    }, [user])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        setValues((values) => ({
            ...values,
            [name]: value,
        }));
        console.log(value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(allActions.loaderActions.showLoader());
        const person = {
            id: Number(localStorage.getItem("id")),
            login: values.login,
            email: values.email,
            country: values.country,
            phoneNumber: values.phoneNumber,
        }
        axios.post('http://localhost:5001/updatePerson', person)
            .then(response => {
                dispatch(allActions.loaderActions.hideLoader());
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
                dispatch(allActions.userActions.setUser(person));
                navigate("/");
            })
            .catch(error => {
                dispatch(allActions.loaderActions.hideLoader());
                console.error('Something went wrong!', error);
            });
    }

    return (
        <div className="page">
            <div className="page__container">
                <Form noValidate validated={validated} className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Update your personal data</h3>
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
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            className="page__input page__input--telephone"
                            required
                            type="text"
                            placeholder="Enter your password"
                            value={values.phoneNumber}
                            onChange={handleInputChange}
                            name="phoneNumber"
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default UserUpdate;