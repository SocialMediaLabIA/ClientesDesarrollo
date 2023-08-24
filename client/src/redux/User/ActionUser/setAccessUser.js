import axios from "axios";

export const setAccessUser = (email, password) => {
  return async (dispatch) => {
    await axios.put(`/users/access?email=${email}&password=${password}`);
  };
};
