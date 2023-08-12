import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from '../redux/filter/slice';
import { contactsSlice } from '../redux/contacts/slice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


