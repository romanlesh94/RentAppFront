import React, {FC, useEffect, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import allActions from "../../redux/actions/allActions";
import axios from "axios";
import ISetCurrentUser from "../../models/setCurrentUserInterface";
import api from "../../services/api";
import {host} from "../../config";
import IHouseProperties from "../../models/housePropertiesInterface";

const EnlistSchema = Yup.object().shape({
    name: Yup.string().min(5, "Too short!").max(100, "Too long").required("Required"),
    description: Yup.string().min(20, "Too short!").max(1000, "Too long").required("Required"),
    rules: Yup.string().min(20, "Too short!").max(300, "Too long").required("Required"),
    address: Yup.string().min(10, "Too short!").max(200, "Too long").required("Required"),
    price: Yup.number().required().positive().integer()
});

const Enlist: FC = () => {

    const [houseProperties, setHouseProperties] = useState([]);
    const [checkboxValues, setCheckboxValues] = useState<number[]>([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);

    const handleCheckboxChange = (value: number) => {
        if (checkboxValues.includes(value)) {
            setCheckboxValues(checkboxValues.filter(checkbox => checkbox !== value));
        } else {
            setCheckboxValues([...checkboxValues, value]);
        }
    };

    const getHouseProperties = () => {
        api.get(`${host}/getHouseProperties`)
            .then(response => {
                console.log(response.data);
                setHouseProperties(response.data);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
    }

    useEffect(() => {
        getHouseProperties();
    }, []);

    return (
        <div className="page">
            <div className="page__container">
                <Formik
                    validationSchema={EnlistSchema}
                    initialValues={{
                        name: '',
                        description: '',
                        rules: '',
                        address: '',
                        price: 0,
                    }}
                    onSubmit={(values) => {
                        const house: IHouseProperties = {
                            id: 0,
                            name: values.name,
                            description: values.description,
                            rules: values.rules,
                            address: values.address,
                            price: values.price,
                            properties: checkboxValues,
                            ownerId: Number(localStorage.getItem("id")),
                        }
                        dispatch(allActions.loaderActions.showLoader());
                        axios.post('http://localhost:5001/createHouse', house)
                            .then(response => {
                                dispatch(allActions.loaderActions.hideLoader());
                                console.log("Status: ", response.status);
                                console.log("Data: ", response.data);
                                navigate(`/addHouseImage/id/${response.data.id}`);
                            })
                            .catch(error => {
                                dispatch(allActions.loaderActions.hideLoader());
                                console.error('Something went wrong!', error);
                            });
                    }}
                >
                    {({handleSubmit, handleChange, values, touched, errors}) => (
                        <Form className="page__form" onSubmit={handleSubmit}>
                            <h3 className="page__headline">Enlist your house:</h3>

                            <Form.Group controlId="validationFormik01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik02">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    isValid={touched.description && !errors.description}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik03">
                                <Form.Label>Rules</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="rules"
                                    value={values.rules}
                                    onChange={handleChange}
                                    isValid={touched.rules && !errors.rules}
                                    isInvalid={!!errors.rules}
                                />
                                <Form.Control.Feedback type="invalid">{errors.rules}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik04">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="text"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    isValid={touched.address && !errors.address}
                                    isInvalid={!!errors.address}
                                />
                                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationFormik05">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    className="page__input page__input--password-check"
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    isValid={touched.price && !errors.price}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                            </Form.Group>

                            {
                                houseProperties.map((property: any, index: number) =>
                                    <Form.Check
                                        type="checkbox"
                                        label={property.propertyText}
                                        key={index}
                                        value={property.id}
                                        checked={checkboxValues.includes(property.id)}
                                        onChange={() => handleCheckboxChange(property.id)}
                                    />
                                )
                            }

                            <button type="submit" className="page__button button-cta">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Enlist;
