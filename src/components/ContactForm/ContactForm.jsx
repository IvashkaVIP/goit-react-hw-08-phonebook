import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/slice';

export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget.elements;
    const name = form.name.value;
    const number = form.number.value;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`); evt.currentTarget.reset();
      return;
    }
    dispatch(addContact(name, number));
    evt.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

