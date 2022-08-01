import { render, fireEvent, queryByAttribute, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import App from '../../App'
import Main from '../main'

const setup = () => {
  const utils = render(<Main />)
  const input = utils.getByTestId('find-location')
  return {
    input,
    ...utils,
  }
}

it('renders Main Details component', () => {
  const { getByText } = render (
  <Provider store={store}>
    <App />
  </Provider>
  );
  const element = screen.getByTestId("main-details")
  expect(element).toBeInTheDocument();
});