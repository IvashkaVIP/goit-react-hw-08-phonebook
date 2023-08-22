import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';
import css from './login.module.css';

export default function Login () {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    // console.log(email, password);
    dispatch(authOperations.logIn({email, password}));

    form.reset();
  };

  return (
    <>
        <form className={css.form} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />

        <button type="submit">Log In</button>
      </form>
    </>
  );
};
