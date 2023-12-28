import Loader from "../../components/Loader/Loader";
import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import IAddHouseImage from "../../models/addHouseImageInterface";
import {useSelector} from "react-redux";
import {host} from "../../config";
import api from "../../services/api";
import {useNavigate, useParams} from "react-router-dom";

const AddUserImage = () => {
    const [validated, setValidated] = useState(false);
    const [image, setImage] = useState<File>();
    const navigate = useNavigate();
    const params = useParams();
    const userId = Number(sessionStorage.getItem("id"));


    const handleImageUpload  = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files as FileList;
        setImage(file?.[0]);
    }

    const handleImageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!image) return;

        let formData = new FormData();
        formData.append("file", image)

        api.post(`${host}/addPersonImage/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("Something went wrong", error);
            });

        window.location.href = '/';
    }

    useEffect(() => {
        console.log(userId, typeof userId);
    })

    return (
        <div className="page">
            <div className="page__container">
                <Form noValidate validated={validated} className="page__form" onSubmit={handleImageSubmit}>
                    <h3 className="page__headline">Add your photo</h3>
                    <Form.Group controlId="formFile">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            className="page__input page__input--email"
                            required
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </Form.Group>
                    <Button type="submit" className="page__button button-cta">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default AddUserImage;