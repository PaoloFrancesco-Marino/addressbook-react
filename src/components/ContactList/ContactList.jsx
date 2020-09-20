import React, { Component } from 'react';
import './ContactList.css';

import { FaUserCircle } from "react-icons/fa";

let contacts = [
    {firstName: "Francesco", lastName: "Rossi", phone: "3334567111"},
    {firstName: "Alice", lastName: "Monterosso", phone: "3334566793"},
    {firstName: "Marco", lastName: "Andreoli",  phone: "3333446776"},
    {firstName: "Paolo", lastName: "Giustini", phone: "3343434335"},
    {firstName: "Giacomo", lastName: "Lentini", phone: "3343434335"},
    {firstName: "Romeo", lastName: "Lauriola", phone: "3343434335"},
    {firstName: "Giovanni", lastName: "Torregrossa", phone: "3343434335"},
    {firstName: "Francesco", lastName: "Metalli", phone: "3343434335"},
    {firstName: "Alfredo", lastName: "Gadau", phone: "3343434335"},
];

export default class ContactList extends Component {
    constructor() {
        super();
        this.state = {
        contacts: contacts
        }
    }

    addContact(person) {
        let contacts = this.state.contacts;

        contacts.push(person);

        this.setState({
        contacts: contacts
        })
    }

    render() {
        return (
        <div>
            <ContactsResult contacts={this.state.contacts} />
            <AddContact contacts={this.state.contacts} addContact={this.addContact.bind(this)} />
        </div>
        )
    }
}

class ContactsResult extends Component {
    constructor() {
            super();
            this.state = {
            search: ''
            }
        }
        
        updateSearch(event) {
        this.setState({
        search: event.target.value
        })
    }

    render() {
    let filteredContacts = this.props.contacts.filter(
        (person) => {
            var fullName = person.firstName.toLowerCase() + person.lastName.toLowerCase()
            return fullName.indexOf(this.state.search.toLowerCase()) !== -1;
        }
    );

    return (
        <div className="contact-list-component">
                <div className="search">
                    <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search contact"/>
                <div/>
            </div>
            <ul className="list-group list-group-flush overflow-auto">
                {filteredContacts.map((person)=> {
                    return <Person person={person} />
                })}
            </ul>
        </div>

        )
    }
}

class Person extends Component {
    render() {
        return (
        <li className="list-group-item d-flex align-items-center">
            <div className="user d-flex align-items-center">
                <FaUserCircle className="default-ico-user"/>   
            </div>
            <div className="contact-user d-flex align-items-center justify-content-between w-100">
                <h5 className="m-0">{this.props.person.firstName} {this.props.person.lastName}</h5>
                <h5 className="m-0">+{this.props.person.phone}</h5>
            </div>
        </li>
        )
    }
}

class AddContact extends Component {

    componentDidMount() {
        this.setState(
            {
                firstName: "",
                lastName: "",
                phone: ""
            }
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addContact(this.state)
    }

    handleChange(data) {
        let name = data.target.name;
        this.setState({
            [name]: data.target.value
        });
    }

    render() {
        return (
            <div className="person-add">
                <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <input className="form-control" placeholder="name" type="text" name="firstName" value={this.props.firstname} onChange={this.handleChange.bind(this)}/>
                        <input className="form-control" placeholder="lastname" type="text" name="lastName" value={this.props.lastname} onChange={this.handleChange.bind(this)} />
                        <input className="form-control" placeholder="phone" type="text" name="phone" value={this.props.phone} onChange={this.handleChange.bind(this)}/>
                        <button type="btn btn-primary">Aggiugi Contatto</button>
                    </div>
                </form>
            </div>
        )
    }
}