import * as contactsAPI from 'services/contactsAPI';
//import * as contactsActions from 'contacts/contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAlls',
  async () => {
    try {
        const resp = await contactsAPI.fetchContactsAPI();
      console.log('resp   ', resp.data);
      return resp.data;
        
    } catch (error) {
      return error;
    }
  }
);

// export const fetchContacts = async dispatch => {
//   dispatch(contactsActions.fetchBooksRequest());

//   try {
//     const contacts = contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess);
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError);
//   }

// };
