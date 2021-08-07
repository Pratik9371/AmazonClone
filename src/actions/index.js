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

export const setCart = (result) => {
  return {
    type: "cart",
    payload: result,
  };
};

export const setCount = (result) => {
  return {
    type: "count",
    payload: result,
  };
};

export const setProducts = (result) => {
  return {
    type: "products",
    payload: result,
  };
};

export const setTotal = (result) => {
  return {
    type: "total",
    payload: result,
  };
};
