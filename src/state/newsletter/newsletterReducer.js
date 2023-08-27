import { createReducer, createAction } from '@reduxjs/toolkit';

// Action
export const subscribeToNewsletter = createAction(
  'news/subscribeToNewsletter',
  ({ fullName, email }) => ({
    payload: { fullName, email },
  })
);

// Reducer
const initialState = {
  isSubscribed: false,
  subscribedEmail: '',
  fullName: '',
};

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(subscribeToNewsletter, (state, action) => {
    state.isSubscribed = true;
    state.subscribedEmail = action.payload.email;
    state.fullName = action.payload.fullName;
  });
});

export default newsReducer;
