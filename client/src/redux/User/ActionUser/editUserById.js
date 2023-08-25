import axios from "axios";

export const editUserById = (id, body) => {
  return async (dispatch) => {
    await axios.put(`/users/edituser?id=${id}`, body);
  };
};
