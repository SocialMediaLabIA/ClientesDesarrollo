import axios from "axios";

export const editUserById = (id, body) => {
  // const { name, lastname, instagram, email, password } = body;
  return async (dispatch) => {
    const user = Object.values(body);
    const response = await axios.put(`/users/edituser?id=${id}`, user[0]);
    console.log(response.data);
  };
};
