import { GET_ALL_USER } from "./ActionUser/getAllUser";
import { GET_USER_BY_LOGIN } from "./ActionUser/getUserByLogin";
import { GET_PROGRESS_NUMBER } from "./ActionUser/getProgressUser";
import { GET_USER_BY_ID } from "./ActionUser/getUserById";

const initialState = {
  users: [],
  user: [],
  progressNumber: 0,
  userById: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER_BY_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case GET_PROGRESS_NUMBER:
      return {
        ...state,
        progressNumber: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
