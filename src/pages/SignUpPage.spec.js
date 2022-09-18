import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom"

// you can use either it or test as the initial method
// the test takes two arguments, the first is a string describing the test
// the second is the actual test
it('has Sign Up Header', () => {
  render(SignUpPage);
  const header = screen.queryByRole('heading', { name: 'Sign Up' });
  expect(header).toBeInTheDocument();
});
