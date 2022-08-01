import { render, fireEvent, queryByAttribute, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import App from '../../App'
import SearchLocation from './'

const setup = () => {
  const utils = render(<SearchLocation />)
  const input = utils.getByTestId('find-location')
  return {
    input,
    ...utils,
  }
}

it('renders Location search component', () => {
  const { getByText } = render (
  <Provider store={store}>
    <App />
  </Provider>
  );
  const element = screen.getByTestId("find-location")
  expect(element).toBeInTheDocument();
});

it('fires Location search component', () => {

  const { getByText } = render (
    <Provider store={store}>
      <App />
    </Provider>
  );    
  const inputText = screen.queryByPlaceholderText('Search for a Location...')
  fireEvent.change(inputText, {target: {value: 'London'}})
  const element = screen.getByTestId("find-location")
  expect(element).toBeInTheDocument();
});
