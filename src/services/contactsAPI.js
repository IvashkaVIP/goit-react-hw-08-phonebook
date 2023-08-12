import axios from 'axios';

axios.defaults.baseURL = 'https://64d743c92a017531bc13159c.mockapi.io/contacts';

export const fetchContactsAPI = async () => await axios.get('');
