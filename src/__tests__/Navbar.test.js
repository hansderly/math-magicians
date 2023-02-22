import { render, screen } from '@testing-library/react';
import { Navbar } from '../components';

it('should', () => {
  render(<Navbar />);

  const linkElement = screen.getByRole('link');

  expect(linkElement.length).toBe(3);
});
