import { utilitySelectors } from '../utilitySelectors';
import { useSelector } from 'react-redux';
import css from './error.module.css';

export const Error = () => {
  const isError = useSelector(utilitySelectors.selectIsError);
  return (
    isError && (
      <>
        <h2 className={css.error}>{isError}</h2>
      </>
    )
  );
};
