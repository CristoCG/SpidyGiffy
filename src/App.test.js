import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const {findByText} = render(<App/>)
  const linkElement = await findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
