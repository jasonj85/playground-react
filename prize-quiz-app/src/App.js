import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Dashboard from './components/Admin/Dashboard/Dashboard';
import Login from './components/Admin/User/Login';
import Profile from './components/Admin/User/Profile';
import Register from './components/Admin/User/Register';
import EntryForm from './components/EntryForm/EntryForm';

import AuthService from './services/auth.service';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      console.log(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };


  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand">PrizeQuiz</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {currentUser ? (
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
                  <li className="nav-item">
                    <a href="/" className="nav-link" onClick={logOut}>Log out</a>                  
                  </li>
                  <span className="pull-right">Logged in as: {currentUser.username}</span>

                </ul>
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
        </header>
        <section>
          <Switch>
            {currentUser ? <Route path="/dashboard" exact component={Dashboard} /> : null}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={EntryForm} />
            <Route render={() => <p>Unauthorised!</p>} />
          </Switch>
        </section>

      </div>
    </BrowserRouter>

  );
}

export default App;
