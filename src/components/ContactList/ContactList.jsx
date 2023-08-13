import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { MdClose } from 'react-icons/md';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.list}>
          <div className={css['list-item-wrap']}>
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
