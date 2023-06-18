import { toast } from 'react-toastify';

/**
 * @function
 * @param {array} products
 * @returns {array | null} with certain properties
 */

export const asyncToaster = (
  promise,
  { loading = 'Loading', success = 'Got the data', error = 'Error when fetching' }
) => {
  toast.promise(promise, {
    loading,
    success,
    error
  });
};

/**
 * @function
 * @param {object}
 * @returns {string} cumulative cost properties
 */

export const mapThroughObject = (obj) => {
  let costs = '';
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      costs += `${key}: ${obj[key]} `;
    }
  }

  if (costs == '') {
    return '---';
  }

  return costs;
};

/**
 * @function
 * @param {object}
 * @returns {string} cumulative cost properties
 */

export const activeFilters = (filterObject) => {
  return Object.keys(filterObject)
    .map((item) => {
      if (filterObject[item].isChecked) {
        const filterValues = {
          isActivated: filterObject[item].isActivated,
          isChecked: filterObject[item].isChecked,
          range: filterObject[item].value
        };
        return filterValues;
      }
    })
    .filter((item) => !!item);
};

/**
 * @function
 * @param {object}
 * @returns {string} cumulative cost properties
 */

export const filterCost = (filterObject = {}, type, value, data) => {
  console.log('filterObject', filterObject);

  // const _activeFilters = activeFilters(filterObject);

  data = data.filter((item) => {
    if (item.cost) {
      if (item.cost[type] >= value[0] && item.cost[type] <= value[1]) {
        return item;
      }
    }
  });

  return data;
};

/**
 * Transforms the given data into a specific format.
 * @param {Array} data - The data to be transformed.
 * @returns {Object} - The transformed data in the desired format.
 */

export const transformData = (data) => {
  const transformedData = {
    id: data.id,
    name: data.name,
    description: data.description,
    age: data.age,
    wood_cost: data.cost.Wood,
    food_cost: data.cost.Food,
    gold_cost: data.cost.Gold,
    build_time: data.build_time,
    reload_time: data.reload_time,
    hit_points: data.hit_points
  };

  return transformedData;
};

export const _filterCost = (filterValues, data) => {
  const filteredData = data.filter((item) => {
    if (item.cost) {
      let isFiltered = true;
      Object.entries(filterValues).forEach(([type, filter]) => {
        if (
          filter.isChecked &&
          filter.isActivated &&
          (item.cost[type] < filter.value[0] || item.cost[type] > filter.value[1])
        ) {
          isFiltered = false;
        }
      });
      return isFiltered;
    }
    return false;
  });

  return filteredData;
};
