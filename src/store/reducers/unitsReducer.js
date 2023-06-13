const initialState = {
  units: [],
  isLoading: false
};

export const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_UNITS_REQUEST':
      console.log('request works well');
      return {
        ...state,
        isLoading: true
      };
    case 'GET_UNITS_REQUEST_SUCCESS':
      console.log('success');
      return {
        ...state,
        units: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
