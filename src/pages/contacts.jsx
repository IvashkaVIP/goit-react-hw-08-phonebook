import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { Filter } from 'components//Filter/Filter';
import { authSelectors } from 'redux/auth/authSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
