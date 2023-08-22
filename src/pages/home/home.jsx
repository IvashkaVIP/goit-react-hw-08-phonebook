// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import css from './home.module.css'

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');


export default function Home () {
  
  return (
    <>
      <h1 className={css['home-page']}> Home Page </h1>
      <button onClick={notify}>Make me a toast</button>
      <Toaster/>
    </>
  );
};
