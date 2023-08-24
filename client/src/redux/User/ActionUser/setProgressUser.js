import axios from "axios";


export const setProgressUser = (id, direction) => {
  return async (dispatch) => {
    await axios.put(`/users/progress?id=${id}`, {direction});
  };
};
