import * as contactsAPI from 'services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await contactsAPI.registration({
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await contactsAPI.logIn({
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await contactsAPI.logOut();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// /users/current
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    
    const persistToken = state.auth.token;

    if (!persistToken) {
      // console.log(
      //   'thunk >>>>  ',
      //   thunkAPI.rejectWithValue('Token not present')
      // );
      // console.log('persisrToken >>> ', persistToken);
      return thunkAPI.rejectWithValue('Token not present');
    }

    const response = await contactsAPI.fetchCurrentUser(persistToken);
    // console.log(response.data);
    return response.data;
  }
);
