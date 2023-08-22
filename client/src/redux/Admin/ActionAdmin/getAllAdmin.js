import axios from "axios";
export const GET_ALL_ADMIN = "GET_ALL_ADMIN";

export const getAllAdmin = () => {
  return async (dispatch) => {
    const response = await axios.get("/get-admin");
    const admin = response.data;
    dispatch({ type: GET_ALL_ADMIN, payload: admin });
  };
};
