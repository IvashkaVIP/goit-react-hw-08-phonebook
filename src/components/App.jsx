import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Home } from 'pages/home';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
