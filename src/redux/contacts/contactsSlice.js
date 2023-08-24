import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import {
  // handlePending,
  handleFulfilled,
  // handleRejected,
} from './contactsHandlers';

export const contactsSlice = createSlice({
  name: 'allContacts',
  initialState: {
    contacts: [],
    // isLoading: false,
    // isError: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, (state, action) => {
        // console.log(action.type)
        // state.isLoading = false;
        // state.isError = null;
        state.contacts.unshift(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.isError = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
