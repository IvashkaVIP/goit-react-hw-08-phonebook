import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { Error } from '../redux/utility/error/error';
import { Loader } from 'redux/utility/loader/loader';
import { authSelectors } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/home/home'));
const RegisterPage = lazy(() => import('../pages/register/register'));
const LoginPage = lazy(() => import('../pages/login/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  
  const isToken = localStorage.getItem('persist:auth:token');
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    isToken && dispatch(fetchCurrentUser());
    dispatch(fetchCurrentUser());
  }, [dispatch, isToken]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        <Error />
        <Loader />
      </div>
    )
  );
};
