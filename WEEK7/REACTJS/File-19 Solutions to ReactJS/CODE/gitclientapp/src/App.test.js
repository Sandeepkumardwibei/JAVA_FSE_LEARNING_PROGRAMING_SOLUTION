// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Git repositories heading', () => {
  render(<App />);
  
  // ✅ Use the actual heading from your App component
  const headingElement = screen.getByText(/Git repositories of User - TechieSyed/i);
  expect(headingElement).toBeInTheDocument();
});
