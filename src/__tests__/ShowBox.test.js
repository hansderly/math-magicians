import { render, screen } from '@testing-library/react';
import { ShowBox } from '../components';

it('should', () => {
  render(<ShowBox>0</ShowBox>);

  const showbox = screen.getByText(/0/i);

  expect(showbox.innerHTML).toBe('0');
});
