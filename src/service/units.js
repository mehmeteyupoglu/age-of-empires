import { Request } from '../utils';

const prefix = '';

/**
 * Asynchronously fetch data from the mock backend
 * @param {string} query
 * @returns {array || undefined}
 */

export const getUnits = async (params) => {
  const unitRequest = await Request.get(`${prefix}/${params}`);

  return unitRequest;
};
