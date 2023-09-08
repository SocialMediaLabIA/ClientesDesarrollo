import axios from "axios";
export const GET_ALL_PAGES = "GET_ALL_PAGES";

export const getAllPage = () => {
  return async (dispatch) => {
    const response = await axios.get("/pages");
    const pages = response.data;
    dispatch({ type: GET_ALL_PAGES, payload: pages });
  };
};
