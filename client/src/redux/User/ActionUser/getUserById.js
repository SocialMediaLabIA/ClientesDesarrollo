import axios from "axios";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const getUserById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/users/userid?id=${id}`);
    const userId = response.data;
    dispatch({ type: GET_USER_BY_ID, payload: userId });
  };
};
