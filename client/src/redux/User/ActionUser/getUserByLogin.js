import axios from "axios";
export const GET_USER_BY_LOGIN = "GET_USER_BY_LOGIN";

export const getUserByLogin = (email, password) => {
  return async (dispatch) => {
    const response = await axios.get(
      `/users/email?email=${email}&&password=${password}`
    );
    const user = response.data;
    dispatch({ type: GET_USER_BY_LOGIN, payload: user });
  };
};
