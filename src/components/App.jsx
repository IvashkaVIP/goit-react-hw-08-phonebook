// import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
// import { useDispatch} from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Home } from 'pages/home';
import { Register } from 'pages/register/register';
import { Login } from 'pages/login/login';
import { AppBar } from './AppBar/appBar';
import css from './App.module.css';

export const App = () => {
  
  return (
    <div className={css.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
