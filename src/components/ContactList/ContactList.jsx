import React, { Component } from 'react';
import './ContactList.css';
import { MdPersonAdd, MdCancel, MdAccountCircle  } from "react-icons/md";

export default class ContactList extends Component {
    state = { 
        contacts: [
        {firstName: "Francesco", lastName: "Rossi", phone: "3334567111"},
        {firstName: "Alice", lastName: "Monterosso", phone: "3334566793"},
        {firstName: "Marco", lastName: "Andreoli",  phone: "3333446776"},
        {firstName: "Paolo", lastName: "Giustini", phone: "3336789876"},
        {firstName: "Giacomo", lastName: "Lentini", phone: "3459876543"},
        {firstName: "Romeo", lastName: "Lauriola", phone: "3387656413"},
        {firstName: "Giovanni", lastName: "Torregrossa", phone: "3498765098"},
        {firstName: "Giulia", lastName: "Metalli", phone: "3487786132"},
        {firstName: "Alfredo", lastName: "Gadau", phone: "3380987674"},
        ],

        search: '',
        show: false
    }

    toogleShow = () => {
        const {show} = this.state;
        this.setState( { show: !show })
    }

    addContact(person) {
        let contacts = this.state.contacts;

        contacts.push(person);

        this.setState({
        contacts: contacts
        })
    }

    updateSearch(event) {
        this.setState({
        search: event.target.value
        })
    }

    deleteContact = (indexContact) => {
        console.log('premuto tasto elimina' + indexContact);

        const newContacts = [...this.state.contacts];
        newContacts.splice(indexContact, 1);
        this.setState({contacts: newContacts});
    }

    

    render() {

        let filteredContacts = this.state.contacts.filter(
            (contacts) => {
                let fullName = contacts.firstName.toLowerCase() + contacts.lastName.toLowerCase()
                return fullName.indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div className="position-relative">
                <div className="contact-list-component">
                    <div className="search">
                        <input type="text" className="form-control mb-3" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search contact"/>
                        <h4>Contatti</h4>
                    <div/>
                </div>
                    <ul className="list-group list-group-flush overflow-auto">
                        {filteredContacts.map((contacts, index)=> 
                            <li key={contacts.phone} className="list-group-item d-flex align-items-center list">
                                <div className="user d-flex align-items-center">
                                    <MdAccountCircle className="default-ico"/>   
                                </div>
                                <div className="contact-user d-flex align-items-center justify-content-between w-100">
                                    <h5 className="m-0">{contacts.firstName} {contacts.lastName}</h5>
                                    <h5 className="m-0">+{contacts.phone}</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <MdCancel className="default-ico delete ml-3" onClick={() => this.deleteContact(index)}/>   
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <MdPersonAdd onClick={this.toogleShow} className="add-contact default-ico mt-4 mb-4"/>
                    {this.state.show && <AddContact contacts={this.state.contacts} addContact={this.addContact.bind(this)} />}
                </div>
            </div>
        )
    }
}

export class AddContact extends Component {

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
            <div className="add-contact-form">
                <h4 className="mb-4">Aggiungi un Contatto</h4>
                <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <input className="form-control mb-4" placeholder="name" type="text" name="firstName" value={this.props.firstname} onChange={this.handleChange.bind(this)}/>
                        <input className="form-control mb-4" placeholder="lastname" type="text" name="lastName" value={this.props.lastname} onChange={this.handleChange.bind(this)} />
                        <input className="form-control mb-4" placeholder="phone" type="text" name="phone" value={this.props.phone} onChange={this.handleChange.bind(this)}/>
                        <button className="btn btn-primary">Conferma</button>
                    </div>
                </form>
            </div>
        )
    }
}