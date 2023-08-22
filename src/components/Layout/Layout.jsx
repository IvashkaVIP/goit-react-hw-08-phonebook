import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={css.container}>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      
    </div>
  );
};

// export default Layout;
                        
