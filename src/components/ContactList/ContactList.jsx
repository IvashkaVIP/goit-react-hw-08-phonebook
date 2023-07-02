export const ContactList = ({ contacts }) => (
  <ul>
        {contacts.map(({ id, name, number }) => (
      <li key={id}>
                <p>{name}: {number}</p>
      </li>
    ))}
  </ul>
);
