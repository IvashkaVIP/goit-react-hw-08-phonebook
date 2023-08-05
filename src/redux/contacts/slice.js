import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
       ],
  reducers: {
    add(state, action) {
      console.log('add')
      return ;
    },
    remove(state, action) {
      console.log('remove');
      return ;
    },
  },
});

export const { add, remove } = contactsSlice.actions;









// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState:   [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
    
//   reducers: {
//     add (state, action) {
//           return 0;
//     },
//       delete(state, action) {
//          return 0;
      
//       },
//   },
// });

// export const { add, delete } = contactsSlice.actions;