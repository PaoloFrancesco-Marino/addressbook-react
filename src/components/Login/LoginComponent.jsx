import React, { Component } from 'react';
import './loginComponent.css';

export default class loginComponent extends Component {

    state = {
        email: '',
        userid: 'Paolo',
        password: '',
        isLogged: false,
        noLogged: false
    }

    render() {
        return (
            <div className="wrapper">
                <div className="box">
                    <h2 className="title mb-4">Address Book</h2>
                    <input  className="form-control mb-4" placeholder="Nome Utente" type="email" name='email' value={this.state.email} onChange={this.gestMod}/>
                    <input  className="form-control mb-4" placeholder="Password" type="password" name='password' value={this.state.password} onChange={this.gestMod}/> 
                    <button className="btn btn-primary btn-submit" onClick={this.login}>Accedi</button>

                    <LoggedInMsg isLogged={this.state.isLogged}></LoggedInMsg>
                    <LoggedInFailMsg isNoLogged={this.state.noLogged}></LoggedInFailMsg>
                </div> 
            </div>
        )
    }


    login = () => {
        if (this.state.email === 'paolo@libero.it' && this.state.password === '1234') {
            console.log('sei loggato');
            this.props.history.push(`/welcome/${this.state.userid}`);
            this.setState(
                {
                    isLogged: true,
                    noLogged: false
                }
            )
        } else {
            this.setState(
                {
                    isLogged: false,
                    noLogged: true
                }
            )
        }
    }

    gestMod = (event) => {
        this.setState (
            {
                [event.target.name]: event.target.value
            }
        )
    }
}

function LoggedInMsg(props) {
    if(props.isLogged) {
        return (
            <div>
                <h5 className="mt-4 text-success">Connessione eseguita</h5>
            </div>
        )
    }

    return null;
}

function LoggedInFailMsg(props) {
    if(props.isNoLogged) {
        return (
            <div>
                <div className="mt-4 alert alert-danger" role="alert">Email e/o Password sono errate!</div>
            </div>
        )
    }

    return null;
}