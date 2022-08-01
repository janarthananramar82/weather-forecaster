import { render, fireEvent, queryByAttribute, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import App from '../../App'
import Favorites from '../favorites'

const setup = () => {
  const utils = render(<Favorites />)
  const input = utils.getByTestId('favourite')
  return {
    input,
    ...utils,
  }
}

it('renders Favorites component', () => {
  const { getByText } = render (
  <Provider store={store}>
    <App />
  </Provider>
  );
  const element = screen.getByTestId("favourite")
  expect(element).toBeInTheDocument();
});