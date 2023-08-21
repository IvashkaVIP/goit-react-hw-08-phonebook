// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { useDispatch} from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Home } from 'pages/home/home';
import { Register } from 'pages/register/register';
import { Login } from 'pages/login/login';
import { Contacts } from 'pages/contacts';
import { AppBar } from './AppBar/appBar';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchCurrentUser())},[dispatch])

  return (
    <div className={css.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute> */}

        {/* <PrivateRoute >
        </PrivateRoute> */}
      </Routes>
    </div>
  );
};
