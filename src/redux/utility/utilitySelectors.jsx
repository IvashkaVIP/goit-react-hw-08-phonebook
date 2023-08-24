const selectIsError = state => state.utility.isError
const selectIsLoading = state => state.utility.isLoading;

export const utilitySelectors = {
    selectIsError,
    selectIsLoading
}