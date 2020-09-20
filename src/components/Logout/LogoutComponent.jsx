import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LogoutComponent.css';

export default class LogoutComponent extends Component {
    render() {
        return (
            <div className="LogoutComponent">
                <h3>Logout Eseguito con successo!</h3>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </div>
        )
    }
}