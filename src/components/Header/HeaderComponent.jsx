import React, { Component } from 'react';
import './HeaderComponent.css';

export default class HeaderComponent extends Component {
    render() {
        return ( 
            <div className="header-component d-flex align-items-center">
                <div className="add">

                </div>
                <div className="profile d-flex align-items-center">
                    <img src="/images/profile.jpg" alt="Paolo"/>
                </div>
                <div className="logout">

                </div>
            </div>
        )
    }
}
