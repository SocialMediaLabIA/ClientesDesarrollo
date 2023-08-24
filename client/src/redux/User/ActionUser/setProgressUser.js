import axios from "axios";
export const GET_PROGRESS_NUMBER = "GET_PROGRESS_NUMBER";

export const setProgressUser = (id) => {
  return async (dispatch) => {
    const response = await axios.put(`/users/progress?id=${id}`);
    const progress = response.data.progress;
    dispatch({ type: GET_PROGRESS_NUMBER, payload: progress });
  };
};
