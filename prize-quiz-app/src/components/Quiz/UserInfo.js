import React, { useState } from 'react';
import axios from '../../axios';
import AppService from '../../services/application.service';

import '../../Styles.scss';

const EntryForm = (props) => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleApplication = e => {
        e.preventDefault();

        AppService.postApplication(formData).then(
            (response) => {
                props.setNotification(response.data.message);
                props.setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                props.setNotification(resMessage);
                props.setSuccessful(false);
            }
        );

        setFormData({
            name: '',
            email: '',
            answer: '',
        })

    }

    return (
        <div className="user-info">
            <form onSubmit={handleApplication}>
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
                    placeholder="Tell us why you want to win the PS5"
                    onChange={updateInput}
                    value={formData.answer || ''}
                ></textarea>
                <button type="submit">Send Application</button>
            </form>
        </div>
    )
}

export default EntryForm;