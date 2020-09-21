import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LogoutComponent.css';

export default class LogoutComponent extends Component {
    render() {
        return (
            <div className="LogoutComponent wrapper">
                <h3 className="title">Logout Eseguito con successo!</h3>
                <p>
                    <Link to="/">Login</Link>
                </p>
            </div>
        )
    }
}