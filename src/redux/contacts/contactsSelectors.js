import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectors';

export const selectContacts = state => state.allContacts.contacts;
export const selectIsLoading = state => state.allContacts.isLoading;
export const selectError = state => state.allContacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
