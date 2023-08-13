import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations'
import {selectContacts} from 'redux/contacts/contactsSelectors'
import { selectFilter } from 'redux/filter/filterSelectors';
import { MdClose } from 'react-icons/md';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(item =>
    item.name.toLowerCase().includes(normalizeFilter)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
    
  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.list}>
          <div className={css['list-item-text']}>
            <p className={css['list-item-name']}>{name}</p>
            <p className={css['list-item-phone']}>{phone}</p>
          </div>
          <button
            className={css['btn-delete']}
            onClick={() => dispatch(deleteContact(id))}
          >
            <MdClose size={24} />
          </button>
        </li>
      ))}
    </ul>
  );
};
