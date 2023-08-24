import { utilitySelectors } from '../utilitySelectors';
import { useSelector } from 'react-redux';
import css from './error.module.css';
// import toast, { Toaster } from 'react-hot-toast';

export const Error = () => {
  const isError = useSelector(utilitySelectors.selectIsError);

  console.log(isError);
  // return (isError && (()=>toast.error('error')));

  return (
    isError && (
      <>
        <h1 className={css.error}>.......Error ....... Error .........</h1>
        {/* <h1 className={css.error}>{isError}</h1> */}
      </>
    )
  );
};

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const persistedAuth = persistReducer(persistConfig, authSlice.reducer);
