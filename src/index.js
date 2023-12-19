import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.jsx';

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(
  <Provider store={store}>
    <App />
  </Provider>
);
