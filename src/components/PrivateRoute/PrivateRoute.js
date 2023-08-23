import { Route } from 'react-router-dom';
// import  Contacts  from 'pages/contacts';

export default function PrivateRoute({children, ...propsRoute}) {
  return (
    <Route {...propsRoute}> {children} </Route > );
}
