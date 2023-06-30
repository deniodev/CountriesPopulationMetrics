import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('renders the correct navbar', () => {
  const { getByTestId } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
});
