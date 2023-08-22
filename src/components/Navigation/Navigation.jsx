import { useSelector } from 'react-redux/es/hooks/useSelector';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';
import css from "./Navigation.module.css"

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
