import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice'

const rootReducer = combineReducers({
  allContacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
