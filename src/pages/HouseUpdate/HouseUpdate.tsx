import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {Button, Form} from "react-bootstrap";
import allActions from "../../redux/actions/allActions";
import api from "../../services/api";
import {host} from "../../config";
import IHouseProperties from "../../models/housePropertiesInterface";
import {useParams} from "react-router-dom";

const HouseUpdate: FC = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        rules: '',
        address: '',
        price: '',
    });
    const [validated, setValidated] = useState(false);
    //const [houseProperties, setHouseProperties] = useState([]);
    //const [checkboxValues, setCheckboxValues] = useState<number[]>([]);

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);
    const selectedHouse = useSelector((state: any) => state.houseReducer.selectedHouse);
    const params = useParams();
    const selectedHouseId = Number(params.id);

    const getSelectedHouse = (id: number) => {
        dispatch(allActions.loaderActions.showLoader());
        api.get(`${host}/getHouse/id/${id}`)
            .then(response => {
                dispatch(allActions.houseActions.setSelectedHouse(response.data.house));
                dispatch(allActions.loaderActions.hideLoader());
                setValues((values) => ({
                    ...values,
                    name: response.data.house.name,
                    description: response.data.house.description,
                    rules: response.data.house.rules,
                    address: response.data.house.address,
                    price: response.data.house.price
                }));
            })
            .catch(error => {
                console.error("Something went wrong", error);
                dispatch(allActions.loaderActions.hideLoader());
            })
    }



    /*const handleCheckboxChange = (value: number) => {
        if (checkboxValues.includes(value)) {
            setCheckboxValues(checkboxValues.filter(checkbox => checkbox !== value));
        } else {
            setCheckboxValues([...checkboxValues, value]);
        }
    };*/

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    };

    useEffect(() => {
        getSelectedHouse(selectedHouseId);
    }, []);

    /*const getHouseProperties = () => {
        api.get(`${host}/getHouseProperties`)
            .then(response => {
                console.log(response.data);
                setHouseProperties(response.data);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });
    }*/

    useEffect(() => {
        //getHouseProperties();
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const house = {
            id: selectedHouseId,
            name: values.name,
            description: values.description,
            rules: values.rules,
            address: values.address,
            price: parseInt(values.price, 10),
        }

        dispatch(allActions.loaderActions.showLoader());

        api.post('http://localhost:5001/updateHouse', house)
            .then(response => {
                dispatch(allActions.loaderActions.hideLoader());
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            })
            .catch(error => {
                dispatch(allActions.loaderActions.hideLoader());
                console.error('Something went wrong!', error);
        });
        setValidated(true);
    }

    return (
        <div className="page">
            <div className="page__container">
                { isLoading ? <Loader /> : null }
                <Form noValidate validated={validated} className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Enlist your house</h3>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="text"
                            placeholder="Enter your house name"
                            value={values.name}
                            name="name"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="text"
                            placeholder="Write a short description of your house"
                            value={values.description}
                            name="description"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Rules</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="text"
                            placeholder="Specify some rules for your guests"
                            value={values.rules}
                            name="rules"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="text"
                            placeholder="Enter your address"
                            value={values.address}
                            name="address"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="number"
                            placeholder="Set your daily price"
                            value={values.price}
                            name="price"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    {/*{
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
                    }*/}
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default HouseUpdate;