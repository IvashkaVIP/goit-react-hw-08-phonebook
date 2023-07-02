import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',    
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = { number, name, id: nanoid() };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  getVisibleContacts = ({filter, contacts}) => {
    
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(item => 
    item.name.toLowerCase().includes(normalizeFilter),
    );
    
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts(this.state);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts </h1>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList contacts={visibleContacts} />

        {/* <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />  */}
      </div>
    );
  }
}
