import React, { Component } from 'react';
import './AddressBookApp.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './Login/LoginComponent';
import WelcomeComponent from './Welcome/WelcomeComponent';

export default class AddressBookApp extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/welcome/:userid" component={WelcomeComponent} />
                    </Switch>
                </Router>
            </div>
        )
    }
}