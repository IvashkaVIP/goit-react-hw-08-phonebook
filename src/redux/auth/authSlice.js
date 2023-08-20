import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.registration.fulfilled, (state, action) => {
        // console.log(state, action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        //   console.log(state, action);
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        //   console.log(state, action);
        state.user = initialState.user
        state.token = initialState.token
        state.isLoggedIn = initialState.isLoggedIn
      });
  },
});
