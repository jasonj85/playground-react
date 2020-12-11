import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthService from '../../services/auth.service';

const Navigation = (props) => {
    const logOut = () => {
        AuthService.logout();
    };

    return (

        <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center justify-content-start">
            <a className="navbar-brand d-md-none d-inline" href="">Brand</a>
            <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="nav-link" href="#_"><i className="fa fa-search mr-1"></i></a>
            <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                {props.currentUser ? (
                    <>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Entry Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                            <li className="nav-item pull-right">
                                <a href="/profile" className="nav-link">Logged in as: {props.currentUser.username}</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link" onClick={logOut}>(Log out)</a>
                            </li>
                        </ul>
                    </>
                ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Entry Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    )}

            </div>
        </nav>

    )
}

export default Navigation;