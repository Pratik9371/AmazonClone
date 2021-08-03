export const setLoading = (result) => {
  return {
    type: "loading",
    payload: result,
  };
};

export const setUser = (result) => {
  return {
    type: "user",
    payload: result,
  };
};

export const setIsLoggedIn = (result) => {
  return {
    type: "isLoggedIn",
    payload: result,
  };
};
