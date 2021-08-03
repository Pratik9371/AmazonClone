export const loading = (result) => {
  return {
    type: "loading",
    payload: result,
  };
};

export const getUser = (result) => {
  return {
    type: "getuser",
    payload: result,
  };
};
