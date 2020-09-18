import React, { Component } from 'react';
import './WelcomeComponent.css';

export default class WelcomeComponent extends Component {

    render() {
        return (
            <div>
                <p>Benvenuto in Address Book {this.props.match.params.userid}</p>
            </div>
        )
    }
}