import axios from "axios";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";

export const getUserByEmail = (email) => {
  return async (dispatch) => {
    const response = await axios.get(`/user/email?email=${email}`);
    const user = response.data;
    dispatch({ type: GET_USER_BY_EMAIL, payload: user });
  };
};
