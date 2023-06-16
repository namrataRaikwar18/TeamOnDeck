import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Welcome/i);
  expect(linkElement.length).toBe(2);
});
