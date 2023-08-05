// src > redux > store.js

import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(55, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//     reducer: {
//         myValue: myReducer,
//   },
// });

// --------------------------------  Использование creatSlice

const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 150,
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
            },
    },
})

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});

export const { increment , decrement } = myValueSlice.actions;

