import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: '',
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.isError = null;
};
const handleRejected = (state, action) => {
  console.log('action >>>',action)
  state.isLoading = false
  state.isError = action.payload.error
};

export const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
