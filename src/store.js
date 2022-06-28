import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/Counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
