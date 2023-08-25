import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { Error } from '../redux/utility/error/error';
import { Loader } from 'redux/utility/loader/loader';
import { authSelectors } from 'redux/auth/authSelectors';
import { resetError } from 'redux/utility/utilitySlice';
import { utilitySelectors } from 'redux/utility/utilitySelectors';

const HomePage = lazy(() => import('../pages/home/home'));
const RegisterPage = lazy(() => import('../pages/register/register'));
const LoginPage = lazy(() => import('../pages/login/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const isError = useSelector(utilitySelectors.selectIsError);
  const currentLocation = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    isError && dispatch(resetError());
  }, [dispatch, isError, currentLocation.key]);
  
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

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <Error />
        <Loader />
      </div>
    )
  );
};
