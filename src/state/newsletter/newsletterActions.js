import { createAction } from '@reduxjs/toolkit';

export const subscribeToNewsletter = createAction('newsletter/subscribeToNewsletter', (fullName, email) => ({
  payload: { fullName, email },
}));
