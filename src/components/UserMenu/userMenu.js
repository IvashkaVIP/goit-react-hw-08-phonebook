// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import * as authOperations  from 'redux/auth/authOperations'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName); 
  
  const handleLogOut = () => {
    
    dispatch(authOperations.logOut());
  }
  

    return (
      <>
        <div>
          <p>Welcome, {name}!</p>
          <button type='button' onClick = {handleLogOut}>Log Out</button>
        </div>
      </>
    );
}