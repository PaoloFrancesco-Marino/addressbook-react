import React, { Component } from 'react';
import './AddressBookApp.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './Login/LoginComponent';
import WelcomeComponent from './Welcome/WelcomeComponent';
import LogoutComponent from './Logout/LogoutComponent';

export default class AddressBookApp extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/logout" component={LogoutComponent} />
                        <Route path="/welcome/:userid" component={WelcomeComponent} />
                    </Switch>
                </Router>
            </div>
        )
    }
}