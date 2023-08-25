import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: '',
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = '';
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.isError = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

export const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    resetError(state) {
      state.isError = '';
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const { resetError } = utilitySlice.actions;