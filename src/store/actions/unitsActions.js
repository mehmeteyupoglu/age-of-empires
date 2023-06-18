export const getUnitsRequest = (params) => {
  return {
    type: 'GET_UNITS_REQUEST',
    params
  };
};

export const getUnitsRequestSuccess = (data) => {
  console.log('data: ', data);
  return {
    type: 'GET_UNITS_REQUEST_SUCCESS',
    payload: data
  };
};
