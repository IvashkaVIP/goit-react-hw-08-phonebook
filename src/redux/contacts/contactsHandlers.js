export const handleFulfilled = (state, action) => {
  state.contacts = action.payload;
  };

