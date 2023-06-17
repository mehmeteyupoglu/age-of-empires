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
