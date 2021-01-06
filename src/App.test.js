import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To Do App header', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do App/i);
  expect(linkElement).toBeInTheDocument();
});
