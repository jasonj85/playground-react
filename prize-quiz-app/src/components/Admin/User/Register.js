import React, { useState } from "react";

import { RegisterUser } from "../../../services/auth.service";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [notification, setNotification] = useState("");

    const handleRegister = e => {
        e.preventDefault();

        setNotification("");
        setSuccessful(false);

        RegisterUser(username, email, password).then(
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
                <form onSubmit={handleRegister}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
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