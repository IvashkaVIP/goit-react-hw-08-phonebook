// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  // console.log(contacts, filter)
  return contacts.filter(item =>
     item.name.toLowerCase().includes(normalizeFilter)
   );
 }
  

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  // console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.list}>
          <p className={css['list-item']}>
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id} className={css.list}>
//         <p className={css['list-item']}>
//           {name}: {number}
//         </p>
//         <button onClick={() => onDeleteContact(id)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
