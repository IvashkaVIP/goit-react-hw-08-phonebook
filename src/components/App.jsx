import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Navigation } from './Navigation/navigation';
import { Home } from 'pages/home';
import { Register } from 'pages/register';
import { Login } from 'pages/login';
import { Contacts } from 'pages/contacts';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<home />} />
      </Routes>
    </div>
  );
};
