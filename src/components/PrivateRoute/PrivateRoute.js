import { authSelectors } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
  const isToken = useSelector(authSelectors.selectToken);
  return isToken ? children : <Navigate to="/" />;
}
