import axios from "axios";

const createUser = (user) => {
  return (dispatch) => {
    axios
      .post("/users", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
};

export default createUser;
