import { authSelectors } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  console.log(children);
  return isLoggedIn ? children : <Navigate to="/" />;
}
