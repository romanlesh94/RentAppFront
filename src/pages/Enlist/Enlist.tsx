import {ChangeEvent, FC, FormEvent, useState} from "react";
import axios from "axios";

const Enlist: FC = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        rules: '',
        address: '',
    });
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('https://localhost:5001/create-house', values)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
        setSubmitted(true);
    }

    return (
        <div className="page">
            <div className="page__container">
                <form className="page__form" onSubmit={handleSubmit}>
                    <h3 className="page__headline">Enlist your house</h3>
                    <label className="page__label">
                        <p className="page__label-text">Name</p>
                        <input
                            type="text"
                            className="page__input page__input--wide"
                            placeholder="Enter your house name"
                            value={values.name}
                            onChange={handleNameInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Description</p>
                        <input
                            className="page__input"
                            placeholder="Write a short description of your house"
                            value={values.description}
                            onChange={handleDescriptionInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Rules</p>
                        <input
                            className="page__input"
                            placeholder="Specify some rules for your guests"
                            value={values.rules}
                            onChange={handleRulesInputChange}
                        />
                    </label>
                    <label className="page__label">
                        <p className="page__label-text">Address</p>
                        <input
                            type="text"
                            className="page__input page__input--wide"
                            placeholder="Enter your address"
                            value={values.address}
                            onChange={handleAddressInputChange}
                        />
                    </label>
                    <input type="submit" className="page__button button-cta" value="Enlist"/>
                </form>
            </div>
        </div>
    );
}

export default Enlist;