// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import css from './userMenu.module.css'
import * as authOperations  from 'redux/auth/authOperations'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName); 
  
  const handleLogOut = () => {
    
    dispatch(authOperations.logOut());
  }
  

    return (
      <>
        <div className={css.wrapper}>
          <p className={css.username}>Welcome, {name}!</p>
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </>
    );
}