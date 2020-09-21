import React, { Component } from 'react';
import './WelcomeComponent.css';
import HeaderComponent from '../Header/HeaderComponent';
import ContactList from '../ContactList/ContactList';


export default class WelcomeComponent extends Component {

    render() {
        return (
            <div className="welcome-component">
                <div className="wrapper flex-column">
                    <h2 className="mb-4 title">Bentornato {this.props.match.params.userid}</h2>
                    <div className="box-2">
                        <HeaderComponent/>
                        <ContactList/>
                    </div>
                </div>
            </div>
        )
    }
}