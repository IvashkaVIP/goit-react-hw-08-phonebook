// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterQuery } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(filterQuery(evt.target.value));
  };
  return (
    <div>
    <h1>Contacts </h1>
    <label className={css.find}>
      <div className={css['find-text']}> Find contacts by name</div>
      <input type="text" value={filter.payload} onChange={onChange} />
      </label>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b className={css.error}>Something wrong... {error}</b>}
      </div>
  );
};
