import React, { useState, useRef } from "react";

import AuthService from "../../../services/auth.service";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState("");

    const handleLogin = e => {
        e.preventDefault();

        setNotification("");
        setLoading(true);

        AuthService.login(username, password).then(
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
            <div className="card card-container">
                <form onSubmit={handleLogin}>
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