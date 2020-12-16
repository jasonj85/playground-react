import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import { RegisterUser } from "../../../services/auth.service";

const Register = (props) => {
    const [successful, setSuccessful] = useState(false);
    const [notification, setNotification] = useState("");
    const { register, handleSubmit, errors } = useForm();

    console.log(errors);

    const onSubmit = data => {
        setNotification("");
        setSuccessful(false);

        RegisterUser(data.username, data.email, data.password).then(
            (response) => {
                setNotification(response.data.message);
                setSuccessful(true);
                props.history.push("/login");
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

    };

    return (
        <div className="col-md-12">
            <div class="alert alert-warning mb-2 text-center">
                <p>If you want to check the status of your previous entries please register with your email address</p>
            </div>
            <div className="card card-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                ref={register({
                                    required: 'Please enter your username.'
                                })}
                            />
                            <div class="invalid-feedback">{errors.username && errors.username.message}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                ref={register({
                                    required: 'Please enter you email.',
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Not a valid email address.'
                                    }
                                })}
                            />
                            <div class="invalid-feedback">{errors.email && errors.email.message}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                ref={register({
                                    required: 'Please enter a password.',
                                    minLength: {
                                        value: 5,
                                        message: 'Min length is 5.',
                                    },
                                })}
                            />
                            <div class="invalid-feedback">{errors.password && errors.password.message}</div>

                        </div>

                        <div className="form-group">
                            <button className="btn btn-dark btn-block">Register</button>
                        </div>
                    </div>


                    {notification && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {notification}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;