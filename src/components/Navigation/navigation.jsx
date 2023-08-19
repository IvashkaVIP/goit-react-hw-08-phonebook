import { Link } from 'react-router-dom'
import css from './navigation.module.css'

export const Navigation = () => {
    return (
        <div className={css.nav}>
        <Link to="/">Home</Link> 
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    );
}