const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectToken = state => state.auth.token;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
};