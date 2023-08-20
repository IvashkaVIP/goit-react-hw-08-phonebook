import * as contactsAPI from 'services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
  'auth/register',
  async ({name, email, password}, thunkAPI) => {
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

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await contactsAPI.logOut();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
