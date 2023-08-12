import * as contactsAPI from '../../services/contactsAPI';
import * as contactsActions from '../contacts/contactsActions';

export const fetchBooks = async dispatch => {
  dispatch(contactsActions.fetchBooksRequest());

  try {
    const contacts = contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess);
  } catch (error) {
    dispatch(contactsActions.fetchContactsError);
  }

};
