const initialState = {
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
