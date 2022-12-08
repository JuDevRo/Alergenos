import React from 'react';
import ReactDOM from 'react-dom/client';
import { reducer } from './reducers';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
} from 'redux';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
