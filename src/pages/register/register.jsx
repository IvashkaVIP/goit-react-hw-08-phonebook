import css from './register.module.css'

export const Register = () => {

    const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const mail = form.elements.mail.value;
    const password = form.elements.password.value;
    console.log(name,mail, password);
    form.reset();
  };

    return (
      <>
        <h1>register</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="mail" name="mail" />
          <label>Password</label>
          <input type="password" name="password" />

          <button type="submit">Register</button>
        </form>
      </>
    );
}