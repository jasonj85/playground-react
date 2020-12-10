import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Dashboard from './components/Admin/Dashboard/Dashboard';
import Login from './components/Admin/User/Login';
import Profile from './components/Admin/User/Profile';
import Register from './components/Admin/User/Register';
import Quiz from './components/Quiz/Quiz';
import Navigation from './components/Navigation/Navigation';

import AuthService from './services/auth.service';

import './Styles.scss';

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      console.log(user);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Navigation currentUser={currentUser} />
        </header>
        <section>
          <div className="container">
          <Switch>
            {currentUser ? <Route path="/dashboard" exact component={Dashboard} /> : null}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Quiz} />
            <Route render={() => <p>Unauthorised!</p>} />
          </Switch>
          </div>
        </section>

      </div>
    </BrowserRouter>

  );
}

export default App;
