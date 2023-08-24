// export const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };
export const handleFulfilled = (state, action) => {
  state.contacts = action.payload;
  // state.isLoading = false;
};
// export const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
