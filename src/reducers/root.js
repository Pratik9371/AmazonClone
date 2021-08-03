const initialState = {
  loading: false,
  user: {},
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "user":
      return { ...state, user: action.payload };
    case "isLoggedIn":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
