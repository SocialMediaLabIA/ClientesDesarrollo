import { GET_ALL_USER } from "./ActionUser/getAllUser";
import { GET_USER_BY_EMAIL } from "./ActionUser/getUserByEmail";

const initialState = {
  users: [],
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
