import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Units from '../pages/Units';

// Mocked Redux store
const mockStore = configureStore([]);

describe('Units', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      unitsReducer: {
        units: [
          { id: 1, name: 'Unit 1', age: 'Dark', cost: { Wood: 100, Food: 50, Gold: 200 } },
          { id: 2, name: 'Unit 2', age: 'Feudal', cost: { Wood: 150, Food: 75, Gold: 300 } },
          { id: 3, name: 'Unit 3', age: 'Castle', cost: { Wood: 200, Food: 100, Gold: 400 } }
        ]
      }
    });
  });

  test('renders the component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Units />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the component is rendered
    expect(screen.getByText('Filter by ages')).toBeInTheDocument();
    expect(screen.getByText('Filter by cost')).toBeInTheDocument();
    expect(screen.getAllByText('All')).toHaveLength(1);
    expect(screen.getAllByText('Dark')).toHaveLength(2);
    expect(screen.getAllByText('Feudal')).toHaveLength(2);
    expect(screen.getAllByText('Castle')).toHaveLength(2);
  });
});
