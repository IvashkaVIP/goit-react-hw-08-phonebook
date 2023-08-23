const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectToken = state => state.auth.token;
const selectIsRefreshing = state => state.auth.isRefreshing;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
  selectIsRefreshing,
};