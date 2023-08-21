import { Link } from 'react-router-dom'
import { authSelectors } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    
    return (
      <>
        {isLoggedIn ? (
          <Link to="/contacts">Contacts</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
      </>
    );
}