import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'

test('renders weather forecast page', () => {
  render(    
    <Provider store={store}>
        <App />
    </Provider>
  );
  const heading = screen.getByText(/Welcome to MY FORECAST Page !/i);
  expect(heading).toBeInTheDocument();
});
