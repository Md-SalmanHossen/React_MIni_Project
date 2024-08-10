import { configureStore } from '@reduxjs/toolkit'
import Counter from '../features/Counter'

export const store = configureStore({
  reducer: {
    account : Counter,
  },
});

export default store;