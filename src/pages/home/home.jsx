// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import css from './home.module.css'

import toast, { Toaster } from 'react-hot-toast';
// const notify = () => toast('Here is your toast.');
const notify = () => toast.success('Here is your toast.');


export default function Home () {
  
  return (
    <>
      <h1 className={css['home-page']}> Home Page </h1>
      <button onClick={()=>toast.success('Coool')}>Make me a toast</button>
      <Toaster/>
    </>
  );
};
