import { Route } from 'react-router-dom';
import { Contacts } from 'pages/contacts';

export default function PrivateRoute() {
  return <Route path="/contacts" element={<Contacts />} />;
}
