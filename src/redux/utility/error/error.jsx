import { utilitySelectors } from '../utilitySelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resetError } from 'redux/utility/utilitySlice';
import css from './error.module.css';

export const Error = () => {
  const isError = useSelector(utilitySelectors.selectIsError);
  const currentLocation = useLocation();
  const dispatch = useDispatch();
 
  useEffect(() => {
   isError && dispatch(resetError());
 }, [dispatch, currentLocation.key]);
  

  return (
    isError && (
      <>
        <h2 className={css.error}>{isError}</h2>
      </>
    )
  );
};
