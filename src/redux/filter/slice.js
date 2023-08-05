import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterQuery(state, action) {
      return action.payload;
    },
  },
});

export const { filterQuery } = filterSlice.actions;
