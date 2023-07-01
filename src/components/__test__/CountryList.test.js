import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CountryList from '../CountryList';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-icons/bs', () => ({
  BsArrowRightCircle: () => <div data-testid="arrow-icon" />,
}));

const mockStore = configureStore([]);
const store = mockStore({
  populationSlice: {
    countryList: [
      { numericCode: 1, name: 'Country 1' },
      { numericCode: 2, name: 'Country 2' },
      { numericCode: 3, name: 'Country 3' },
    ],
  },
});

describe('CountryList', () => {
  it('should render the search input and country list', () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryList />
        </Router>
      </Provider>,
    );

    const searchInput = screen.getByLabelText('search');
    expect(searchInput).toBeInTheDocument();

    const countryList = screen.getByRole('list');
    expect(countryList).toBeInTheDocument();
  });

  it('should navigate to the detailed view of a country', () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryList />
        </Router>
      </Provider>,
    );

    const countryLink = screen.getByText('Country 1');
    fireEvent.click(countryLink);

    expect(window.location.href).toContain('/1');
  });
});
