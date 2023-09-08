import axios from "axios";
export const POST_PAGES = "POST_PAGES";

export const postPage = (body) => {
  return async (dispatch) => {
    const response = await axios.post("/pages", body);
    const pages = response.data;
    dispatch({ type: POST_PAGES, payload: pages });
  };
};
