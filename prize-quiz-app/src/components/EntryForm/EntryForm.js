import React, { useState } from 'react';
import axios from '../../axios';
import AppService from '../../services/application.service';

import logo from '../../images/win-a-playstation-5.jpg';

import '../../Styles.scss';

const EntryForm = () => {
    const [formData, setFormData] = useState({})
    const [successful, setSuccessful] = useState(false);
    const [notification, setNotification] = useState("");

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault();

        AppService.postApplication(formData).then(
            (response) => {
                setNotification(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setNotification(resMessage);
                setSuccessful(false);
            }
        );

        setFormData({
            name: '',
            email: '',
            answer: '',
        })
    }

    return (
        <>
            <div className="entry-form">

                <img src={logo} className="logo" alt="logo" />
                {successful ? (
                    <div class="alert alert-success">
                        <p>Thank you your details have been registered and you will be contacted if you win!</p>
                    </div>) :
                    (

                        <div className="form-container">

                            <p>All you have to do is tell us who lives at 742 evergreen terrace?</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={updateInput}
                                    value={formData.name || ''}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={updateInput}
                                    value={formData.email || ''}
                                />
                                <textarea
                                    type="text"
                                    name="answer"
                                    placeholder="Type your answer here"
                                    onChange={updateInput}
                                    value={formData.answer || ''}
                                ></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
            </div>

        </>
    )
}

export default EntryForm;