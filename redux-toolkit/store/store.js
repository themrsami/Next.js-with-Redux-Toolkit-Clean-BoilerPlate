// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux-toolkit/CounterSlice/counterslice';


const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;