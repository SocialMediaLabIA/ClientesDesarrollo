import axios from "axios";
export const POST_USER = "POST_USER";

export const postUser = (body) => {
  return async (dispatch) => {
    const response = await axios.post("/user", body);
    const user = response.data;
    dispatch({ type: POST_USER, payload: user });
  };
};
