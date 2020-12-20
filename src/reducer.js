export const initialState = {
  loading: false,
  error: false,
  countries: [],
};

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true, error: false };

    case ACTIONS.GET_DATA:
      return {
        ...state,
        countries: action.payload.countries,
        loading: false,
        error: false,
      };

    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default reducer;
