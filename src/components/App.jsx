import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { AppBar } from './AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute'
// import { authSelectors } from 'redux/auth/authSelectors';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import { useDispatch} from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsOperations';

// import { Home } from 'pages/home/home';
// import { Register } from 'pages/register/register';
// import { Login } from 'pages/login/login';
// import { Contacts } from 'pages/contacts';

const HomePage = lazy(() => import('../pages/home/home'));
const RegisterPage = lazy(() => import('../pages/register/register'));
const LoginPage = lazy(() => import('../pages/login/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

// import { AppBar } from './AppBar/AppBar';

// import css from './App.module.css';

// import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  // const isFetchingUser = useSelector(authSelectors.selectIsRefreshing)
  // console.log('refreshing >>> ', isFetchingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
    // </div>
  );
};
