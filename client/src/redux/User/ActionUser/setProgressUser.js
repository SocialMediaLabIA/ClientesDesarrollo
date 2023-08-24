import axios from "axios";

export const setProgressUser = (id) => {
  return async (dispatch) => {
    await axios.put(`/users/progress?id=${id}`);
  };
};