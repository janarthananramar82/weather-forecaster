import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { store } from './store'
import { Helmet } from 'react-helmet'

const TITLE = 'Weather Forecaster';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <App />
  </Provider>
  </React.StrictMode>
);

