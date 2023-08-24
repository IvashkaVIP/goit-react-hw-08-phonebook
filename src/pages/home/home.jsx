// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './home.module.css'

import { authSelectors } from 'redux/auth/authSelectors';

// import toast, { Toaster } from 'react-hot-toast';
// const notify = () => toast('Here is your toast.');
// const notify = () => toast.success('Here is your toast.');


export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const userName = useSelector(authSelectors.selectUserName);
  
  return isLoggedIn ? (
    <>
      <h1 className={css['home-page']}>Hello, {userName}</h1>
      <h2 className={css['home-page']}>now you can manage your contacts</h2>
    </>
  ) : (
    <>
      <h1 className={css['home-page']}> PhoneBook </h1>
      <h2 className={css['home-page']}> please register or log in</h2>
    </>
  );
  
};
