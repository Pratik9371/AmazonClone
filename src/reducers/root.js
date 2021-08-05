const initialState = {
  loading: false,
  user: {},
  isLoggedIn: false,
  cart: [],
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "user":
      return { ...state, user: action.payload };
    case "isLoggedIn":
      return { ...state, isLoggedIn: action.payload };
    case "cart":
      return { ...state, cart: action.payload };
    case "count":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
