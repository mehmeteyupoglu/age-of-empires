import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import UnitDetails from '../pages/UnitDetails';

// Mocked Redux store
const mockStore = configureStore([]);

// Mock useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
  useNavigate: jest.fn()
}));

describe('UnitDetails', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      unitsReducer: {
        units: [
          {
            id: 1,
            name: 'Unit 1',
            description: 'Description 1',
            age: 'Dark',
            cost: { Wood: 100, Food: 50, Gold: 200 },
            build_time: '2m',
            reload_time: '3s',
            hit_points: 150
          }
        ]
      }
    });
  });

  test('renders the component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UnitDetails />
        </MemoryRouter>
      </Provider>
    );

    // Unit 1 assertions
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Wood Cost')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Food Cost')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('Gold Cost')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('Build Time')).toBeInTheDocument();
    expect(screen.getByText('2m')).toBeInTheDocument();
    expect(screen.getByText('Reload Time')).toBeInTheDocument();
    expect(screen.getByText('3s')).toBeInTheDocument();
    expect(screen.getByText('Hit Points')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });
});
