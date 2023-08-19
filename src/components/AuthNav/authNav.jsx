import {Link} from 'react-router-dom'

export const AuthNav = () => {
    return (
      <>
        <Link to="/register">Register</Link>
        <Link to="/login">Log in</Link>
      </>
    );
    }