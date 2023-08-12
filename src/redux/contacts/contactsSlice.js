import { createSlice} from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'allContacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, contacts: action.payload, isLoading: false };
    },
    // [fetchContacts.fulfilled] (state, action) { state.contacts = action.payload },
    [fetchContacts.reject]: state => {
      return { ...state, isLoading: false, error: true };
    },
    //--------------------------------------------------------------------
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.unshift(action.payload);
    },
    [addContact.rejected](state, action) {
      console.log('Rejected');
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //---------------------------------------------------------------------
  },
});
//  [fetchContacts.pending]: (state) => {
//       return { ...state, isLoading: true };
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       return { ...state, contacts: action.payload, isLoading: false };
//     },
//     // [fetchContacts.fulfilled] (state, action) { state.contacts = action.payload },
//     [fetchContacts.reject]: (state) => {
//       return { ...state, isLoading: false, error: true };
//     },
//-----------------------------------------------------------
// [addContact.pending]: (state)=> {
//       return { ...state, isLoading: true };
//       // state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, action) => {
//        return {
//         ...state,
//         contacts: action.payload,
//         isLoading: false,
//         error: null,
//       };
//       // state.isLoading = false;
//       // state.error = null;
//       // state.contacts.unshift(action.payload);
//     },
//     [addContact.rejected]: (state, action) => {
//       console.log('Rejected');
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//       // state.isLoading = false;
//       // state.error = action.payload;
//     },

//--------------------------------------------------------------------------------------------------
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

// export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.allContacts.contacts;
export const getIsLoading = state => state.allContacts.isLoading;
export const getError = state => state.allContacts.error;
