export const ContactList = ({ contacts }) => (
  <ul>
        {contacts.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>
);
