import { utilitySelectors } from '../utilitySelectors';
import { useSelector, useDispatch } from 'react-redux';
import { resetError } from 'redux/utility/utilitySlice';
import css from './error.module.css';

export const Error = () => {
  const isError = useSelector(utilitySelectors.selectIsError);
  const dispatch = useDispatch();
 
   if (isError) {
     setTimeout(() => {
       dispatch(resetError())
     }, 3000);
   }
   
  return (
    isError && (
      <>
        <h2 className={css.error}>{isError}</h2>
      </>
    )
  );
};
