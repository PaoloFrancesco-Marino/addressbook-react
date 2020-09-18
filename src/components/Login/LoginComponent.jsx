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
            <div class="wrapper">
                <div class="box">
                    <h2 class="title mb-4">Address Book</h2>
                    <input  class="form-control mb-4" placeholder="Nome Utente" type="email" name='email' value={this.state.email} onChange={this.gestMod}/>
                    <input  class="form-control mb-4" placeholder="Password" type="password" name='password' value={this.state.password} onChange={this.gestMod}/> 
                    <button class="btn btn-primary" onClick={this.login}>Accedi</button>

                    <LoggedInMsg isLogged={this.state.isLogged}></LoggedInMsg>
                    <LoggedInFailMsg isNoLogged={this.state.noLogged}></LoggedInFailMsg>
                </div> 
            </div>
        )
    }


    login = () => {
        console.log(this.state.userid);
        console.log(this.state.password);

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
                <h5 class="mt-4 text-success">Connessione eseguita</h5>
            </div>
        )
    }

    return null;
}

function LoggedInFailMsg(props) {
    if(props.isNoLogged) {
        return (
            <div>
                <h5 class="mt-4 text-danger">Connessione non eseguita</h5>
            </div>
        )
    }

    return null;
}