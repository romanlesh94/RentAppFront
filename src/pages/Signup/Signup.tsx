import React, {FC} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import allActions from "../../redux/actions/allActions";
import axios from "axios";
import ISetCurrentUser from "../../models/setCurrentUserInterface";
import api from "../../services/api";

const SignupSchema = Yup.object().shape({
    login: Yup.string().min(2, "Too short!").max(100, "Too long").required("Required"),
    password: Yup.string().min(8, "Too short!").max(100, "Too long").required("Required"),
    email: Yup.string().email("Invalid email").required('Required'),
    country: Yup.string().min(2, "Too short!").max(100, "Too long").required("Required"),
    phoneNumber: Yup.string().min(11, "Too short!").max(14, "Too long").required("Required"),
});

const Signup: FC = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="page__container">
                <Formik
                    validationSchema={SignupSchema}
                    initialValues={{
                        login: '',
                        password: '',
                        email: '',
                        country: '',
                        phoneNumber: '',
                    }}
                    onSubmit={(values) => {
                        dispatch(allActions.loaderActions.showLoader());
                        api.post('http://localhost:5001/signup', values)
                            .then(response => {
                                dispatch(allActions.loaderActions.hideLoader());
                                console.log("Status: ", response.status);
                                console.log("Data: ", response.data);
                                const user: ISetCurrentUser = {
                                    login: values.login,
                                    country: values.country,
                                    email: values.email,
                                    phoneNumber: values.phoneNumber,
                                    imageUrl: null
                                }
                                dispatch(allActions.userActions.setUser(user));
                                localStorage.setItem("id", response.data);
                                navigate("/verify");
                            })
                            .catch(error => {
                                dispatch(allActions.loaderActions.hideLoader());
                                console.error('Something went wrong!', error);
                            });
                    }}
                >
                    {({handleSubmit, handleChange, values, touched, errors}) => (
                        <Form className="page__form" onSubmit={handleSubmit}>
                            <h3 className="page__headline">Sign up</h3>

                            <Form.Group controlId="validationFormik01">
                                <Form.Label>Login</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="login"
                                    value={values.login}
                                    onChange={handleChange}
                                    isValid={touched.login && !errors.login}
                                    isInvalid={!!errors.login}
                                />
                                <Form.Control.Feedback type="invalid">{errors.login}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik03">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik04">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="country"
                                    value={values.country}
                                    onChange={handleChange}
                                    isValid={touched.country && !errors.country}
                                    isInvalid={!!errors.country}
                                />
                                <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik05">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    isValid={touched.phoneNumber && !errors.phoneNumber}
                                    isInvalid={!!errors.phoneNumber}
                                />
                                <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                            </Form.Group>

                            <button type="submit" className="page__button button-cta">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Signup;
