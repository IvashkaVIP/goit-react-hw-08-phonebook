import { creatAction } from '@reduxjs/toolkit';

// pending
export const fetchContactsRequest = creatAction(
  'contacts/fetchContactsRequest'
);
// fulfilled
export const fetchContactsSuccess = creatAction(
  'contacts/fetchContactsSuccess'
);
// reject
export const fetchContactsError = creatAction(
  'contacts/fetchContactsError'
);
