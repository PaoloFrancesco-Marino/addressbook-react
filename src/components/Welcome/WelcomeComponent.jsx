import React, { Component } from 'react';
import './WelcomeComponent.css';
import HeaderComponent from '../Header/HeaderComponent';

export default class WelcomeComponent extends Component {

    render() {
        return (
            <div class="welcome-component">
                <div className="wrapper flex-column">
                    <h2 className="mb-4">Bentornato {this.props.match.params.userid}</h2>
                    <div className="box-2">
                        <HeaderComponent/>
                    </div>
                </div>
            </div>
        )
    }
}