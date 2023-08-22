import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/authNav';
import { UserMenu } from 'components/UserMenu/userMenu';
import css from '../App.module.css'
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
// import { Contacts } from 'pages/contacts';


export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)
  
    return (
      <header className={css.header}>
        {/* <Navigation /> */}
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </header>
    );
}