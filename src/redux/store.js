import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuth = persistReducer(persistConfig, authSlice.reducer);

const rootReducer = combineReducers({
  allContacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: persistedAuth,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);