import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterQuery(_, action) {
      return action.payload;
    },
  },
});

export const { filterQuery } = filterSlice.actions;

export const getFilter = state => state.filter;
