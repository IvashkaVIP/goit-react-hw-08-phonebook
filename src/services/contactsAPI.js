import axios from 'axios';

axios.defaults.baseURL = 'https://64d743c92a017531bc13159c.mockapi.io/contacts';

export const fetchContacts = async () => await axios.get('');

export const addContact = async ({
    createdAt, name, phone, id,
}) => {
 const resp = await axios.post('', {
        createdAt, name, phone, id,
 });
    console.log(createdAt, '  ', name, '  ', phone, '  ', id);
    console.log(Date.now().toString());
    return resp;
}

