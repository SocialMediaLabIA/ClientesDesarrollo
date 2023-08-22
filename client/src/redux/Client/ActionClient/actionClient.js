import axios from "axios";
export const GET_ALL_CLIENT = "GET_ALL_CLIENT";

export const getAllClient = () => {
  return async (dispatch) => {
    const response = await axios.get("/get-client");
    const client = response.data;
    dispatch({ type: GET_ALL_CLIENT, payload: client });
  };
};
