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
//     
export const fetchContacts = async () => {
  const resp = await axios.get('contacts');
  // console.log(resp);
  return resp;
}

export const addContact = async ({ name, number}) => {
  const resp = await axios.post('contacts', { name, number });
  // console.log(resp);
  return resp;
};

export const deleteContact = async id => await axios.delete(`contacts/${id}`);
