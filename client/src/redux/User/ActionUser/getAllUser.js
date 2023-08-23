import axios from "axios";
export const GET_ALL_USER = "GET_ALL_USER";

export const getAllUser = () => {
  return async (dispatch) => {
    const response = await axios.get("/user");
    const user = response.data;
    dispatch({ type: GET_ALL_USER, payload: user });
  };
};
