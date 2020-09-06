const initialState = {
  isLoading:false,
  countries: [],
  errorMessage:""
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_START":
      return {...state, isLoading: true, errorMessage:""}
    case "GET_COUNTRIES_SUCCESS":
      return {...state, countries: action.payload, isLoading: false};
    case "GET_COUNTRIES_ERROR":
      return {...state, errorMessage: action.payload, isLoading: false};
    default:
      return state;
  }
}