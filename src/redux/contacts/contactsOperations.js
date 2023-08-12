import * as contactsAPI from 'services/contactsAPI';
//import * as contactsActions from 'contacts/contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAlls',
  async () => {
    try {
        const resp = await contactsAPI.fetchContacts();
      //console.log('resp   ', resp.data);
      return resp.data;
        
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
        const response = await contactsAPI.addContact({
          // createdAt: (Date.now()).toJSON(),
          createdAt: Date.now(),
          name,
          phone,
          id: nanoid(),
        });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
