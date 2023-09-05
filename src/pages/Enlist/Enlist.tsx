import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {Button, Form} from "react-bootstrap";
import allActions from "../../redux/actions/allActions";

const Enlist: FC = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        rules: '',
        address: '',
        price: '',
    });
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector((state: any) => state.loaderReducer.isLoading);

    const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handleDescriptionInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            description: event.target.value,
        }));
    };

    const handleRulesInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            rules: event.target.value,
        }));
    };

    const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            address: event.target.value,
        }));
    };

    const handlePriceInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({
            ...values,
            price: event.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(allActions.loaderActions.showLoader());
        axios.post('http://localhost:5001/createHouse', values)
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
                            onChange={handleNameInputChange}
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
                            onChange={handleDescriptionInputChange}
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
                            onChange={handleRulesInputChange}
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
                            onChange={handleAddressInputChange}
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
                            onChange={handlePriceInputChange}
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

export default Enlist;