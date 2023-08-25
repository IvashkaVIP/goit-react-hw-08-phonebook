import { useSelector } from 'react-redux';
import css from './home.module.css';
import { authSelectors } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const userName = useSelector(authSelectors.selectUserName);

  return isLoggedIn ? (
    <>
      <h1 className={css['home-page']}>Hello, {userName}, now you can </h1>
      <h2 className={css['home-page']}>
        <Link className={css.link} to="contacts">
          manage your contacts
        </Link>
      </h2>
    </>
  ) : (
    <>
      <h1 className={css['home-page']}> PhoneBook </h1>
      <h2 className={css['home-page']}>
        {' '}
        please{' '}
        <Link className={css.link} to="register">
          register
        </Link>{' '}
        or{' '}
        <Link className={css.link} to="login">
          log in
        </Link>
      </h2>
    </>
  );
}
