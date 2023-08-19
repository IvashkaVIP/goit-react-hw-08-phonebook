import css from './login.module.css'

export const Login = () => {
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const mail = form.elements.mail.value;
    const password = form.elements.password.value;
    console.log(mail, password);
    form.reset();
  };

    return (
      <>
        <h1>Log In</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="mail" name="mail" />
          <label>Password</label>
          <input type="password" name="password" />

          <button type="submit">Log In</button>
        </form>
      </>
    );
};
