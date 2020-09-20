import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HeaderComponent.css';

import { FiSettings, FiLogOut } from "react-icons/fi";

export default class HeaderComponent extends Component {
    render() {
        return ( 
            <div className="header-component d-flex align-items-center">
                <div className="add">
                <FiSettings className="nav-icon"/>
                </div>
                <div className="profile d-flex align-items-center justify-content-center">
                    <img src="/images/profile.jpg" alt="Paolo"/>
                </div>
                <div className="logout">
                    <Link to="/logout">
                        <FiLogOut className="nav-icon"/>
                    </Link>
                </div>
            </div>
        )
    }
}
