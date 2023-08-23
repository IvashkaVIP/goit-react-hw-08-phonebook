import { authSelectors } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import  Contacts  from 'pages/contacts';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/" />;
}
