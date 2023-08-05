import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import {TestComponent} from './TestComponent/TestComponent'
import css from './App.module.css';

export const App = () => {
 

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts </h1>
      <Filter />
      <ContactList />

      {/* <TestComponent></TestComponent> */}

    </div>
  );
};
