import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  formSubmitHandler = ({name}) => {
    const contact = { name: name, id: nanoid() };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],

    }));
  };

  render() {
    const { contacts } = this.state;
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts </h1>
        <ContactList contacts={contacts} />

        {/* <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />  */}
      </div>
    );
  }
}
