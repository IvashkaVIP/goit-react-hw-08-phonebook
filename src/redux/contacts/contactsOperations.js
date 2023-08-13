import * as contactsAPI from 'services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const fetchContacts = createAsyncThunk(
  'tasks/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await contactsAPI.fetchContacts();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await contactsAPI.addContact({
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

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await contactsAPI.deleteContact(contactId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
