import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HeaderComponent.css';

import { MdSettings, MdPowerSettingsNew  } from "react-icons/md";

export default class HeaderComponent extends Component {
    render() {
        return ( 
            <div className="header-component d-flex align-items-center">
                <div className="add">
                    <MdSettings className="default-ico setting"/>
                </div>
                <div className="profile d-flex align-items-center justify-content-center">
                    <img src="/images/profile.jpg" alt="Paolo"/>
                </div>
                <div className="logout">
                    <Link to="/logout">
                        <MdPowerSettingsNew className="default-ico logout"/>
                    </Link>
                </div>
            </div>
        )
    }
}
