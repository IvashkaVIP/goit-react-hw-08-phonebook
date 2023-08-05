import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');
const decrement = createAction('myValue/decrement');

const myReducer = createReducer(55, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
    reducer: {
        myValue: myReducer,
  },
});


