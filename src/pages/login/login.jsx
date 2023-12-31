import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';
import css from './login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(authOperations.logIn({ email, password }));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>Email</label>
        <input className={css.input} type="email" name="email" />
        <label>Password</label>
        <input className={css.input} type="password" name="password" />

        <button type="submit">Log In</button>
      </form>
    </>
  );
}
