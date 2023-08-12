import { createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, contacts: action.payload };
    },
    [fetchContacts.reject]: (state, action) => {
      return { ...state, error: true };
    },
  },
});


// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return { payload: { id: nanoid(), name, number } };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;