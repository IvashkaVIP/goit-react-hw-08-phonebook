import {useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {

  const [contacts, setContacts] = useState(() => {
   
    const local = JSON.parse(window.localStorage.getItem('contacts'));
  
    if (!local.length) return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  
    return (JSON.parse(window.localStorage.getItem('contacts')));  
  }
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

