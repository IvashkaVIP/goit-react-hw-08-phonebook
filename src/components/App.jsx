import { Component, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {

const [contacts, setContacts] = useState(
  [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
     if (contacts.find(item => item.name === name)) {
       alert(`${name} is already in contacts.`);
       return;
     }
     setContacts(prev => [{ number, name, id: nanoid() }, ...prev]);
   };
  
  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
      setContacts(prevState => (
      prevState.filter(contact => contact.id !== contactId)
    ));
  };

  const getVisibleContacts = () => {
      // const { filter, contacts } = this.state;
      const normalizeFilter = filter.toLowerCase();
      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalizeFilter)
      );
    };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h1>Contacts </h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        // contacts={contacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}









//---------------------------------------------------------------------------------------------
export class oldApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) this.setState({ contacts: parsedContacts });

  }
  
  componentDidUpdate(prevProps, prevState) {
  
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      
    }

}

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.find(item => item.name === name)) {
      alert(`${name}  is already in contacts.`);
      return;
    }

    const contact = { number, name, id: nanoid() };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts </h1>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
    


