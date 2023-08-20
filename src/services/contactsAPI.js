// https://connections-api.herokuapp.com/

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registration = async ({ name, email, password }) => {
  const resp = await axios.post('users/signup', { name, email, password })
  token.set(resp.data.token);
  return resp;
}

export const logIn = async ({ email, password }) => {
  const resp = await axios.post('users/login', { email, password });
  token.set(resp.data.token);
  return resp;
}

export const logOut = async () => {
  const resp =  await axios.post('users/logout');
  token.unset();
  return resp;
}
//     /contacts
export const fetchContacts = async () => {
  const resp = await axios.get('contacts');
  console.log(resp);
  return resp;
}


//------------------------------------------------------------

export const addContact = async ({ createdAt, name, phone, id }) => {
  const resp = await axios.post('', {
    createdAt,
    name,
    phone,
    id,
  });
  return resp;
};

// axios.defaults.baseURL = 'https://64d743c92a017531bc13159c.mockapi.io/contacts';

// export const fetchContacts = async () =>
//   await axios.get('https://64d743c92a017531bc13159c.mockapi.io/contacts');
export const deleteContact = async id => await axios.delete(`/${id}`, { id });

// export const addContact = async ({ createdAt, name, phone, id }) => {
//   const resp = await axios.post('', {
//     createdAt,
//     name,
//     phone,
//     id,
//   });
//   return resp;
// };

// export const deleteContact = async id => await axios.delete(`/${id}`, { id });
