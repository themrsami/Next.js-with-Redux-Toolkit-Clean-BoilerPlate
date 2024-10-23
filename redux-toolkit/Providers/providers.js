// src/app/providers.js
'use client'; // This ensures that Provider runs on the client side

import { Provider } from 'react-redux';
import store from '../store/store';

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
