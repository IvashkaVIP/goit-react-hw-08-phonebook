const selectIsLoggedIn = state => state.auth.selectIsLoggedIn;
const selectUserName = state => state.auth.user.name;

export const authSelectors = {
    selectIsLoggedIn,
    selectUserName
}