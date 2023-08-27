import { configureStore } from '@reduxjs/toolkit';
import newsletterReducer from './newsletter/newsletterReducer';


/**
 * The configureStore function takes an options object as an argument.
 * In the example above, we are passing a reducer property to the options object,
 * which specifies the reducers for the store.You can also specify other options
 * such as middleware and enhancers in the options object.
 *
 * @see https://redux-toolkit.js.org/api/configureStore
 */

const store = configureStore({
  reducer: {
        newsletter: newsletterReducer,
  },
});

export default store;
