const initialState = {
  units: [],
  isLoading: false
};

export const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_UNITS_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_UNITS_REQUEST_SUCCESS':
      return {
        ...state,
        units: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
