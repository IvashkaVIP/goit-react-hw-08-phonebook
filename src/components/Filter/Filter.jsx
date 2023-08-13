// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterQuery } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(filterQuery(evt.target.value));
  };
  return (
    <label className={css.find}>
      <div className={css['find-text']}> Find contacts by name</div>
      <input type="text" value={filter.payload} onChange={onChange} />
    </label>
  );
};
