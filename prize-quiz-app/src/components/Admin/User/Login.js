import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import { LoginUser } from "../../../services/auth.service";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setNotification("");
        setLoading(true);

        LoginUser(data.username, data.password).then(
            () => {
                props.history.push("/profile");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setNotification(resMessage);
            }
        );
    };
    
    return (
        <div className="col-md-12">
            <div class="alert alert-warning mb-2 text-center">
                <p>Please login with your details</p>
            </div>
            <div className="card card-container">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <button className="btn btn-dark btn-block" disabled={loading}>
                            <span>Login &nbsp;</span>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                        </button>
                    </div>

                    {notification && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {notification}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;