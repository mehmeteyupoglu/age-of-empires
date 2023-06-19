import React from 'react';
import { render } from '@testing-library/react';
import { transformData, filterCost } from '../utils/utility-functions';

describe('transformData', () => {
  it('should transform the given data into the desired format', () => {
    const data = {
      id: 1,
      name: 'Archer',
      description: 'Quick and light. Weak at close range; excels at battle from distance',
      expansion: 'Age of Kings',
      age: 'Feudal',
      cost: { Wood: 25, Gold: 45 },
      build_time: 35,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 4,
      range: 30,
      attack: 4,
      armor: '0/0',
      accuracy: '80%'
    };

    const transformedData = transformData(data);

    expect(transformedData).toEqual({
      id: 1,
      name: 'Archer',
      description: 'Quick and light. Weak at close range; excels at battle from distance',
      age: 'Feudal',
      wood_cost: 25,
      gold_cost: 45,
      build_time: 35,
      reload_time: 2,
      hit_points: 4
    });
  });

  it('should render the transformed data correctly', () => {
    const data = {
      id: 2,
      name: 'Crossbowman',
      description: 'Upgraded archer',
      expansion: 'Age of Kings',
      age: 'Castle',
      cost: { Wood: 25, Gold: 45 },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 35,
      range: 5,
      attack: 5,
      armor: '0/0',
      attack_bonus: ['+3 spearmen'],
      accuracy: '85%'
    };

    const transformedData = transformData(data);

    const { getByText } = render(
      <div>
        <div>{transformedData.name}</div>
        <div>{transformedData.age}</div>
        <div>{transformedData.wood_cost}</div>
        <div>{transformedData.hit_points}</div>
      </div>
    );

    expect(getByText('Crossbowman')).toBeInTheDocument();
    expect(getByText('Castle')).toBeInTheDocument();
    expect(getByText('25')).toBeInTheDocument();
    expect(getByText('35')).toBeInTheDocument();
  });
});

describe('filterCost', () => {
  const sampleData = [
    {
      id: 1,
      name: 'Archer',
      cost: { Wood: 25, Gold: 45 }
    },
    {
      id: 2,
      name: 'Crossbowman',
      cost: { Wood: 25, Gold: 45 }
    },
    {
      id: 3,
      name: 'Arbalest',
      cost: { Wood: 25, Gold: 45 }
    }
  ];

  it('should filter data based on cost ranges', () => {
    const filterValues = {
      Wood: {
        isChecked: true,
        isActivated: true,
        value: [20, 30]
      },
      Gold: {
        isChecked: true,
        isActivated: true,
        value: [40, 50]
      }
    };

    const filteredData = filterCost(filterValues, sampleData);

    expect(filteredData).toHaveLength(3); // All items should pass the filter

    // Add more specific assertions based on your use case
    // For example, check if specific items are present in the filtered data
    expect(filteredData).toContainEqual(expect.objectContaining({ id: 1 }));
    expect(filteredData).toContainEqual(expect.objectContaining({ id: 2 }));
    expect(filteredData).toContainEqual(expect.objectContaining({ id: 3 }));
  });

  it('should not filter data when cost filter values are not activated', () => {
    const filterValues = {
      Wood: {
        isChecked: true,
        isActivated: false,
        value: [20, 30]
      },
      Gold: {
        isChecked: true,
        isActivated: false,
        value: [40, 50]
      }
    };

    const filteredData = filterCost(filterValues, sampleData);

    expect(filteredData).toHaveLength(3); // All items should pass the filter as filters are not activated
  });

  it('should not filter data when cost filter types are not checked', () => {
    const filterValues = {
      Wood: {
        isChecked: false,
        isActivated: true,
        value: [20, 30]
      },
      Gold: {
        isChecked: false,
        isActivated: true,
        value: [40, 50]
      }
    };

    const filteredData = filterCost(filterValues, sampleData);

    expect(filteredData).toHaveLength(3); // All items should pass the filter as filter types are not checked
  });
});
