import axios from "axios";
export const POST_ADMIN = "GET_ALL_ADMIN";

export const postAdmin = () => {
  return async (dispatch) => {
    const response = await axios.get("/get-admin");
    const admin = response.data;
    dispatch({ type: POST_ADMIN, payload: admin });
  };
};
