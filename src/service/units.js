import { Request } from '../utils';

const prefix = '';

/**
 * Asynchronously fetch data from the mock backend
 * @param {string} query
 * @returns {array || undefined}
 */

export const getUnits = async () => {
  const unitRequest = await Request.get(`${prefix}`);

  return unitRequest;
};
