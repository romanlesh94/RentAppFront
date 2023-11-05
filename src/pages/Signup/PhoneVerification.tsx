import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import allActions from "../../redux/actions/allActions";
import {IUser} from "../../models/user";
import {useNavigate} from "react-router-dom";
import ISetCurrentUser from "../../models/setCurrentUserInterface";
import api from "../../services/api";
import {host} from "../../config";

const PhoneVerification: FC = () => {
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDigitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[0-9]*$/;

        if (regex.test(value)) {
            switch (e.target.name) {
                case 'digit1':
                    setDigit1(value);
                    if (value.length === 1) {
                        document.getElementsByName('digit2')[0].focus();
                    }
                    break;
                case 'digit2':
                    setDigit2(value);
                    if (value.length === 1) {
                        document.getElementsByName('digit3')[0].focus();
                    }
                    break;
                case 'digit3':
                    setDigit3(value);
                    if (value.length === 1) {
                        document.getElementsByName('digit4')[0].focus();
                    }
                    break;
                case 'digit4':
                    setDigit4(value);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = (e: FormEvent) => {
        const data = {
            code: digit1 + digit2 + digit3 + digit4,
            personId: Number(localStorage.getItem("id"))
        }
        api.post(`${host}/verifyPhoneNumber`, data)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    if(response.data.id) {
                        localStorage.setItem("id", response.data.id);
                    }
                }
                navigate(`/addUserImage/id/:${response.data.id}`)
            })
            .catch(error => {
                dispatch(allActions.loaderActions.hideLoader());
                console.error('Something went wrong!', error);
            });
        navigate("/");
    }

    return (
        <div className="page">
            <div className="page__container">
                <Form noValidate validated={validated} className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Enter the code from the sms</h3>
                    <div className="page__code-inputs">
                        <Form.Group controlId="validationCustom04">
                            <Form.Control
                                className="page__code-input"
                                required
                                type="text"
                                placeholder="x"
                                value={digit1}
                                onChange={handleDigitChange}
                                name="digit1"
                                maxLength={1}
                                pattern="[0-9]*"
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Control
                                className="page__code-input"
                                required
                                type="text"
                                placeholder="x"
                                value={digit2}
                                onChange={handleDigitChange}
                                name="digit2"
                                maxLength={1}
                                pattern="[0-9]*"
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Control
                                className="page__code-input"
                                required
                                type="text"
                                placeholder="x"
                                value={digit3}
                                onChange={handleDigitChange}
                                name="digit3"
                                maxLength={1}
                                pattern="[0-9]*"
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Control
                                className="page__code-input"
                                required
                                type="text"
                                placeholder="x"
                                value={digit4}
                                onChange={handleDigitChange}
                                name="digit4"
                                maxLength={1}
                                pattern="[0-9]*"
                            />
                        </Form.Group>
                    </div>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default PhoneVerification;