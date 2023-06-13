export const getUnitsRequest = () => {
  return {
    type: 'GET_UNITS_REQUEST'
  };
};

export const getUnitsRequestSuccess = (data) => {
  console.log('data: ', data);
  return {
    type: 'GET_UNITS_REQUEST_SUCCESS',
    payload: data
  };
};
