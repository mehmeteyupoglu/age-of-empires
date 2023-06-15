import { render, screen, cleanup } from '@testing-library/react';
import Home from '../pages/Home';

afterEach(() => {
  cleanup();
});

test('renders home page', () => {
  render(<Home />);
  const homePageElement = screen.getByTestId('home-page');
  expect(homePageElement).toBeInTheDocument();
});
